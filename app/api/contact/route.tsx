import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  service: z.string().min(1),
  domain: z.string().min(1),
  message: z.string().min(10),
})

const services = {
  imprimerie: "Imprimerie",
  informatique: "Solutions Informatiques",
  prestations: "Prestations de Services",
  "import-export": "Import & Export",
}

const domains = {
  imprimerie: {
    infographie: "Infographie",
    serigraphie: "Sérigraphie",
    "graphic-design": "Graphic Design",
    "impression-numerique": "Impression Numérique",
    branding: "Branding & Identité Visuelle",
  },
  informatique: {
    "web-development": "Développement Web",
    "web-design": "Web Design",
    "mobile-app": "Applications Mobile",
    "cloud-solutions": "Solutions Cloud",
    "qa-testing": "QA & Testing",
    maintenance: "Maintenance IT",
  },
  prestations: {
    consulting: "Conseil & Stratégie",
    formation: "Formation Professionnelle",
    audit: "Audit & Évaluation",
    "gestion-projet": "Gestion de Projet",
    "support-technique": "Support Technique",
  },
  "import-export": {
    sourcing: "Sourcing Produits",
    logistique: "Logistique & Transport",
    douane: "Procédures Douanières",
    "commerce-international": "Commerce International",
    distribution: "Distribution & Vente",
  },
}

export async function POST(request: NextRequest) {
  try {
    // Vérifier la taille du body
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 10000) {
      return NextResponse.json(
        {
          success: false,
          message: "Payload trop volumineux",
        },
        { status: 413 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "emaktech237@gmail.com",
        pass: process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD,
      },
    })

    const serviceName = services[validatedData.service as keyof typeof services] || validatedData.service
    const domainName =
      domains[validatedData.service as keyof typeof domains]?.[validatedData.domain as keyof any] ||
      validatedData.domain

    // Email to company
    const companyEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #ec4899, #06b6d4); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .info-box { background: #f8f9fa; border-left: 4px solid #06b6d4; padding: 15px; margin: 15px 0; }
            .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
            .highlight { color: #ec4899; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🎯 Nouvelle Demande de Service</h1>
            <p>E. E TECH - Créer et Diffuser votre image</p>
          </div>
          
          <div class="content">
            <h2>Informations Client</h2>
            <div class="info-box">
              <p><strong>Nom:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Téléphone:</strong> <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
            </div>

            <h2>Service Demandé</h2>
            <div class="info-box">
              <p><strong>Service:</strong> <span class="highlight">${serviceName}</span></p>
              <p><strong>Domaine:</strong> <span class="highlight">${domainName}</span></p>
            </div>

            <h2>Message du Client</h2>
            <div class="info-box">
              <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #e3f2fd; border-radius: 8px;">
              <h3>Actions Rapides</h3>
              <p>
                <a href="tel:${validatedData.phone}" style="background: #ec4899; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📞 Appeler</a>
                <a href="mailto:${validatedData.email}" style="background: #06b6d4; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px; margin-right: 10px;">✉️ Répondre</a>
                <a href="https://wa.me/${validatedData.phone.replace(/[^0-9]/g, "")}" style="background: #25d366; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">💬 WhatsApp</a>
              </p>
            </div>
          </div>

          <div class="footer">
            <p>E. E TECH - Terminus Saint Michel, Douala | 679 75 18 83 - 693 35 11 53</p>
            <p>emaktech237@gmail.com | www.eeteck.com</p>
          </div>
        </body>
      </html>
    `

    // Email to client (confirmation)
    const clientEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background: linear-gradient(135deg, #ec4899, #06b6d4); color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .info-box { background: #f8f9fa; border-left: 4px solid #06b6d4; padding: 15px; margin: 15px 0; }
            .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
            .highlight { color: #ec4899; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>✅ Demande Reçue avec Succès</h1>
            <p>E. E TECH - Créer et Diffuser votre image</p>
          </div>
          
          <div class="content">
            <h2>Bonjour ${validatedData.name},</h2>
            <p>Nous avons bien reçu votre demande concernant nos services. Voici un récapitulatif de votre demande :</p>

            <div class="info-box">
              <p><strong>Service:</strong> <span class="highlight">${serviceName}</span></p>
              <p><strong>Domaine:</strong> <span class="highlight">${domainName}</span></p>
              <p><strong>Date de demande:</strong> ${new Date().toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</p>
            </div>

            <h3>Prochaines Étapes</h3>
            <ul>
              <li>📋 Notre équipe étudie votre demande</li>
              <li>📞 Nous vous contactons sous 24h</li>
              <li>💼 Proposition personnalisée</li>
              <li>🚀 Démarrage de votre projet</li>
            </ul>

            <div style="margin-top: 30px; padding: 20px; background: #e8f5e8; border-radius: 8px;">
              <h3>🎯 Pourquoi Choisir E. E TECH ?</h3>
              <ul>
                <li>✅ Plus de 10 ans d'expérience</li>
                <li>✅ Équipe d'experts qualifiés</li>
                <li>✅ Solutions sur mesure</li>
                <li>✅ Support client 24/7</li>
                <li>✅ Garantie satisfaction</li>
              </ul>
            </div>

            <div style="margin-top: 20px; padding: 20px; background: #fff3cd; border-radius: 8px;">
              <h3>📞 Besoin d'une Réponse Urgente ?</h3>
              <p>N'hésitez pas à nous contacter directement :</p>
              <p>
                <strong>Téléphone:</strong> <a href="tel:+237679751883">679 75 18 83</a> | <a href="tel:+237693351153">693 35 11 53</a><br>
                <strong>WhatsApp:</strong> <a href="https://wa.me/237679751883">Cliquez ici</a><br>
                <strong>Email:</strong> <a href="mailto:emaktech237@gmail.com">emaktech237@gmail.com</a>
              </p>
            </div>
          </div>

          <div class="footer">
            <p><strong>E. E TECH</strong> - Prestations de Services, Import & Export</p>
            <p>Imprimerie, Solutions Informatiques</p>
            <p>📍 Terminus Saint Michel, Douala - Cameroun</p>
            <p>📞 679 75 18 83 - 693 35 11 53 | ✉️ emaktech237@gmail.com</p>
          </div>
        </body>
      </html>
    `

    // Send email to company
    await transporter.sendMail({
      from: `"${validatedData.name}" <${process.env.SMTP_USER || "emaktech237@gmail.com"}>`,
      to: "emaktech237@gmail.com",
      subject: `🎯 Nouvelle Demande: ${serviceName} - ${domainName}`,
      html: companyEmailHtml,
      replyTo: validatedData.email,
    })

    // Send confirmation email to client
    await transporter.sendMail({
      from: `"E. E TECH" <${process.env.SMTP_USER || "emaktech237@gmail.com"}>`,
      to: validatedData.email,
      subject: `✅ Demande reçue - ${serviceName} | E. E TECH`,
      html: clientEmailHtml,
    })

    return NextResponse.json(
      {
        success: true,
        message: "Emails envoyés avec succès",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Email error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Données invalides",
          errors: error.errors,
        },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi de l'email",
      },
      { status: 500 },
    )
  }
}
