import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      templateName,
      subject,
      description,
      senderName,
      senderTitle,
      senderEmail,
      senderPhone,
      variables
    } = body;

    // Validate required fields
    if (!templateName || !subject || !senderEmail) {
      return NextResponse.json(
        { error: 'Missing required fields: templateName, subject, senderEmail' },
        { status: 400 }
      );
    }

    // Read the React Email component
    const templatePath = path.join(process.cwd(), 'emails', 'SchoolWorkshopOutreachEmail.tsx');
    
    if (!fs.existsSync(templatePath)) {
      return NextResponse.json(
        { error: 'Email template file not found' },
        { status: 404 }
      );
    }

    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Generate HTML for Resend template
    const html = generateResendHTML(templateContent, variables || []);

    // Create template in Resend with variables
    const templateVariables = variables.map((variable: any) => ({
      key: variable.name,
      name: variable.name,
      type: 'string', // Resend requires type: "string" or "number"
      description: variable.description || `Variable for ${variable.name}`
    }));

    const { data, error } = await resend.templates.create({
      name: templateName,
      subject: subject,
      html: html,
      variables: templateVariables,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Template created successfully',
      templateId: data.id,
      templateName: templateName,
      variables: variables || []
    });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function generateResendHTML(templateContent: string, variables: any[]) {
  // Generate HTML with Resend variable syntax
  let html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>ragTech School Workshop Outreach</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; padding: 32px 0; }
        .logo { max-width: 120px; height: auto; }
        .content { padding: 0 20px; }
        .h1 { font-size: 28px; font-weight: 700; margin: 0 0 24px; }
        .h2 { font-size: 20px; font-weight: 600; margin: 32px 0 16px; }
        .paragraph { font-size: 16px; line-height: 1.6; margin: 0 0 16px; }
        .speaker-section { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 0 0 16px; }
        .speaker-content { display: flex; align-items: flex-start; gap: 16px; }
        .speaker-image { border-radius: 50%; border: 2px solid #e9ecef; }
        .speaker-name { font-size: 18px; font-weight: 600; margin: 0 0 4px; }
        .speaker-role { color: #666; font-size: 14px; margin: 0 0 8px; }
        .speaker-description { font-size: 14px; line-height: 1.5; margin: 0 0 8px; }
        .speaker-highlights { color: #555; font-size: 13px; line-height: 1.4; margin: 0; }
        .workshop-section { background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 0 0 20px; }
        .workshop-title { font-size: 18px; font-weight: 600; margin: 0 0 8px; }
        .workshop-description { font-size: 16px; line-height: 1.6; margin: 0 0 12px; }
        .workshop-list { font-size: 14px; line-height: 1.6; margin: 0 0 16px; padding-left: 20px; }
        .cta-section { text-align: center; margin: 32px 0; }
        .button { background: #a8d8d4; border-radius: 8px; color: white; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block; padding: 14px 32px; }
        .signature { font-size: 16px; line-height: 1.6; margin: 32px 0 0; }
        a { color: #007bff; text-decoration: underline; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://ragtechdev.com/assets/logo/ragtech-logo.png" alt="ragTech" class="logo">
        </div>
        
        <div class="content">
            <h1 class="h1">{{{contactName ? 'Dear ' + contactName + ',' : 'Dear [Contact Person Name],'}}}</h1>
            
            <p class="paragraph">
                I hope this email finds you well. My name is {{{senderName}}} from ragTech, and I'm reaching out because we believe your students at {{{schoolName}}} would benefit from our hands-on technology workshops delivered by practising software engineers.
            </p>

            <h2 class="h2">Who We Are</h2>
            <p class="paragraph">
                ragTech brings real engineers who are actively building technology into classrooms. We're not professional trainers who used to work in tech — we're engineers who are still coding, still learning, and bringing that real-world experience into every session.
            </p>
            
            <p class="paragraph">
                <strong>Our Tech Podcast:</strong> We host the <a href="https://ragtechdev.com/">ragTech Podcast</a> where we explore the topics and questions that matter in tech today — from AI ethics and career growth to responsible innovation and community building. Our podcast reflects our approach: honest conversations, practical insights, and making complex tech topics accessible to everyone.
            </p>

            <h2 class="h2">Meet Our Speakers</h2>
            
            <div class="speaker-section">
                <div class="speaker-content">
                    <div>
                        <img src="https://ragtechdev.com/assets/team/saloni.png" width="80" height="80" alt="Saloni" class="speaker-image">
                    </div>
                    <div>
                        <div class="speaker-name">Saloni</div>
                        <div class="speaker-role">Senior Software Engineer, Co-Director (WomenDevs SG)</div>
                        <div class="speaker-description">
                            Engineering leader who turns complex software and AI concepts into practical workflows teams can apply immediately.
                        </div>
                        <div class="speaker-highlights">
                            <strong>Expertise:</strong> AI 101 for Developers, Tech Concepts for Product Managers, Interview Preparation
                        </div>
                    </div>
                </div>
            </div>

            <div class="speaker-section">
                <div class="speaker-content">
                    <div>
                        <img src="https://ragtechdev.com/assets/team/victoria.png" width="80" height="80" alt="Victoria" class="speaker-image">
                    </div>
                    <div>
                        <div class="speaker-name">Victoria</div>
                        <div class="speaker-role">Solutions Architect, GitHub Star, Co-Director (WomenDevs SG)</div>
                        <div class="speaker-description">
                            Solutions architect and technical communicator known for making advanced topics accessible and actionable.
                        </div>
                        <div class="speaker-highlights">
                            <strong>Expertise:</strong> System Design, Personal Branding, Technical Writing, GitHub Best Practices
                        </div>
                    </div>
                </div>
            </div>

            <div class="speaker-section">
                <div class="speaker-content">
                    <div>
                        <img src="https://ragtechdev.com/assets/team/natasha.png" width="80" height="80" alt="Natasha" class="speaker-image">
                    </div>
                    <div>
                        <div class="speaker-name">Natasha</div>
                        <div class="speaker-role">Software Engineer, Partnerships Lead (WomenDevs SG)</div>
                        <div class="speaker-description">
                            Builder and facilitator focused on responsible tech adoption, community leadership, and 0 to 1 product execution.
                        </div>
                        <div class="speaker-highlights">
                            <strong>Expertise:</strong> AI Ethics, Responsible Tech, Community Leadership, Women in Tech Empowerment
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="h2">Our School Workshops</h2>
            <p class="paragraph">
                We offer a range of programmes designed for different age groups and learning objectives:
            </p>

            <div class="workshop-section">
                <div class="workshop-title">💻 Intro to Coding</div>
                <div class="workshop-description">
                    Perfect for complete beginners. Students write their first lines of real code and solve mini challenges.
                </div>
                <ul class="workshop-list">
                    <li>Available in Python, JavaScript, or web basics (HTML/CSS)</li>
                    <li>Duration: 60-90 minutes</li>
                    <li>Levels: Secondary, JC, and polytechnic/university</li>
                </ul>
            </div>

            <div class="workshop-section">
                <div class="workshop-title">🤖 Gen AI & Tech Literacy</div>
                <div class="workshop-description">
                    Interactive demos with live AI tools. Covers how AI works, responsible usage, bias, and ethics.
                </div>
                <ul class="workshop-list">
                    <li>Students learn when to trust (and when NOT to trust) AI</li>
                    <li>Duration: 60-90 minutes</li>
                    <li>Levels: Secondary, JC, and polytechnic/university</li>
                </ul>
            </div>

            <div class="workshop-section">
                <div class="workshop-title">🛠️ Mini Hackathon</div>
                <div class="workshop-description">
                    Team-based problem-solving experience. Perfect for innovation days or orientation events.
                </div>
                <ul class="workshop-list">
                    <li>Themes: sustainability tech, community apps, AI for good</li>
                    <li>Duration: Half-day or full-day</li>
                    <li>Levels: Secondary school through university</li>
                </ul>
            </div>

            <div class="workshop-section">
                <div class="workshop-title">🌱 Tech & Sustainability</div>
                <div class="workshop-description">
                    Explores tech's environmental impact (carbon cost of AI, e-waste). Discussion-based activities included.
                </div>
                <ul class="workshop-list">
                    <li>Adaptable for geography, computing, or general science classes</li>
                    <li>Duration: 45-60 minutes</li>
                    <li>Levels: Secondary school through university</li>
                </ul>
            </div>

            <div class="workshop-section">
                <div class="workshop-title">🚀 Breaking Into Tech</div>
                <div class="workshop-description">
                    Career guidance from working engineers. Debunks myths about who belongs in tech.
                </div>
                <ul class="workshop-list">
                    <li>Real playbook for getting started in tech careers</li>
                    <li>Duration: 45-90 minutes</li>
                    <li>Levels: Upper secondary through university</li>
                </ul>
            </div>

            <h2 class="h2">Flexible Delivery Formats</h2>
            <p class="paragraph">
                We fit around your timetable and event needs:
            </p>
            <ul class="workshop-list">
                <li><strong>Assembly Talks</strong> (30-60 min) - Engaging large-group sessions for the whole cohort</li>
                <li><strong>Classroom Workshops</strong> (60-120 min) - Deeper, interactive small-group learning</li>
                <li><strong>Mini Hackathons</strong> (Half or full day) - Team-based, project-driven problem solving</li>
                <li><strong>Career & Mentorship Panels</strong> (45-90 min) - Live Q&A with practising engineers</li>
            </ul>

            <h2 class="h2">Why Schools Choose ragTech</h2>
            <ul class="workshop-list">
                <li>✅ <strong>Real Engineers</strong> - Our speakers are actively working in the tech industry</li>
                <li>✅ <strong>Customizable</strong> - All sessions can be tailored to your curriculum goals</li>
                <li>✅ <strong>Interactive</strong> - Hands-on learning, not just lectures</li>
                <li>✅ <strong>Inclusive</strong> - Especially popular for underrepresented groups in tech</li>
                <li>✅ <strong>Flexible</strong> - In-person or virtual delivery options available</li>
            </ul>

            <h2 class="h2">See Us in Action</h2>
            <p class="paragraph">
                You can watch our speakers in action:
            </p>
            <ul class="workshop-list">
                <li><a href="https://www.youtube.com/watch?v=BPYt_Xs20q8">Navigating the Ethical Landscape of AI</a></li>
                <li><a href="https://www.youtube.com/watch?v=oE_EWQUYpj8">Networking for Techies - JuniorDevSG</a></li>
                <li><a href="https://www.youtube.com/watch?v=WJS2QeE1_-4">Interview Ready Online Course Series</a></li>
            </ul>

            <h2 class="h2">Let's Tailor Something for {{{schoolName}}}</h2>
            <p class="paragraph">
                I'd love to schedule a brief 15-minute call to discuss:
            </p>
            <ul class="workshop-list">
                <li>Your students' age groups and interests</li>
                <li>Curriculum alignment opportunities</li>
                <li>Event formats that work for your school</li>
                <li>Customization options for your specific needs</li>
            </ul>

            <p class="paragraph">
                <strong>Visit our full workshop catalogue:</strong> <a href="https://ragtechdev.com/workshops/school">https://ragtechdev.com/workshops/school</a>
            </p>

            <div class="cta-section">
                <a href="https://ragtechdev.com/contact" class="button">Get in Touch</a>
            </div>

            <p class="signature">
                Looking forward to potentially bringing real tech education to your students!
            </p>

            <p class="signature">
                Best regards,<br />
                {{{senderName}}}<br />
                {{{senderTitle}}}<br />
                ragTech<br />
                {{{senderEmail}}}<br />
                {{{senderPhone}}}<br />
                <a href="https://ragtechdev.com">ragtechdev.com</a>
            </p>
        </div>
    </div>
</body>
</html>`;
  
  return html;
}
