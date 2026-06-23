import {
  Section,
  Heading,
  Text,
  Button,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Img,
  Link,
} from '@react-email/components';
import * as React from 'react';

interface SchoolWorkshopOutreachEmailProps {
  schoolName?: string;
  contactName?: string;
  senderName?: string;
  senderTitle?: string;
  senderEmail?: string;
  senderPhone?: string;
}

export default function SchoolWorkshopOutreachEmail({
  schoolName = "[School Name]",
  contactName = "[Contact Person Name]",
  senderName = "[Your Name]",
  senderTitle = "[Your Title]",
  senderEmail = "[Your Email]",
  senderPhone = "[Your Phone Number]",
}: SchoolWorkshopOutreachEmailProps) {
  const greeting = contactName !== "[Contact Person Name]" ? `Dear ${contactName},` : "Dear [Contact Person Name],";
  
  return (
    <Html>
      <Head />
      <Preview>Bring Real Engineers to Your School - Tech Workshops by ragTech</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://ragtechdev.com/assets/logo/ragtech-logo.png"
              width="120"
              alt="ragTech"
              style={logo}
            />
          </Section>

          {/* Content */}
          <Section style={content}>
            <Heading style={h1}>{greeting}</Heading>
            
            <Text style={paragraph}>
              I hope this email finds you well. My name is {senderName} from ragTech, and I&apos;m reaching out because we believe your students at {schoolName} would benefit from our hands-on technology workshops delivered by practising software engineers.
            </Text>

            <Heading style={h2}>Who We Are</Heading>
            <Text style={paragraph}>
              ragTech brings real engineers who are actively building technology into classrooms. We&apos;re not professional trainers who used to work in tech — we&apos;re engineers who are still coding, still learning, and bringing that real-world experience into every session.
            </Text>
            
            <Text style={paragraph}>
              <strong>Our Tech Podcast:</strong> We host the <a href="https://ragtechdev.com/">ragTech Podcast</a> where we explore the topics and questions that matter in tech today — from AI ethics and career growth to responsible innovation and community building. Our podcast reflects our approach: honest conversations, practical insights, and making complex tech topics accessible to everyone.
            </Text>

            <Heading style={h2}>Meet Our Speakers</Heading>
            
            {/* Speaker 1: Saloni */}
            <Section style={speakerSection}>
              <div style={speakerContent}>
                <div style={speakerImageContainer}>
                  <Img
                    src="https://ragtechdev.com/assets/team/saloni.png"
                    width="80"
                    height="80"
                    alt="Saloni"
                    style={speakerImage}
                  />
                </div>
                <div style={speakerInfo}>
                  <Text style={speakerName}>Saloni</Text>
                  <Text style={speakerRole}>Senior Software Engineer, Co-Director (WomenDevs SG)</Text>
                  <Text style={speakerDescription}>
                    Engineering leader who turns complex software and AI concepts into practical workflows teams can apply immediately.
                  </Text>
                  <Text style={speakerHighlights}>
                    <strong>Expertise:</strong> AI 101 for Developers, Tech Concepts for Product Managers, Interview Preparation
                  </Text>
                </div>
              </div>
            </Section>

            {/* Speaker 2: Victoria */}
            <Section style={speakerSection}>
              <div style={speakerContent}>
                <div style={speakerImageContainer}>
                  <Img
                    src="https://ragtechdev.com/assets/team/victoria.png"
                    width="80"
                    height="80"
                    alt="Victoria"
                    style={speakerImage}
                  />
                </div>
                <div style={speakerInfo}>
                  <Text style={speakerName}>Victoria</Text>
                  <Text style={speakerRole}>Solutions Architect, GitHub Star, Co-Director (WomenDevs SG)</Text>
                  <Text style={speakerDescription}>
                    Solutions architect and technical communicator known for making advanced topics accessible and actionable.
                  </Text>
                  <Text style={speakerHighlights}>
                    <strong>Expertise:</strong> System Design, Personal Branding, Technical Writing, GitHub Best Practices
                  </Text>
                </div>
              </div>
            </Section>

            {/* Speaker 3: Natasha */}
            <Section style={speakerSection}>
              <div style={speakerContent}>
                <div style={speakerImageContainer}>
                  <Img
                    src="https://ragtechdev.com/assets/team/natasha.png"
                    width="80"
                    height="80"
                    alt="Natasha"
                    style={speakerImage}
                  />
                </div>
                <div style={speakerInfo}>
                  <Text style={speakerName}>Natasha</Text>
                  <Text style={speakerRole}>Software Engineer, Partnerships Lead (WomenDevs SG)</Text>
                  <Text style={speakerDescription}>
                    Builder and facilitator focused on responsible tech adoption, community leadership, and 0 to 1 product execution.
                  </Text>
                  <Text style={speakerHighlights}>
                    <strong>Expertise:</strong> AI Ethics, Responsible Tech, Community Leadership, Women in Tech Empowerment
                  </Text>
                </div>
              </div>
            </Section>

            <Heading style={h2}>Our School Workshops</Heading>
            <Text style={paragraph}>
              We offer a range of programmes designed for different age groups and learning objectives:
            </Text>

            {/* Workshop 1 */}
            <Section style={workshopSection}>
              <Text style={workshopTitle}>💻 Intro to Coding</Text>
              <Text style={workshopDescription}>
                Perfect for complete beginners. Students write their first lines of real code and solve mini challenges.
              </Text>
              <ul style={workshopList}>
                <li style={workshopListItem}>Available in Python, JavaScript, or web basics (HTML/CSS)</li>
                <li style={workshopListItem}>Duration: 60-90 minutes</li>
                <li style={workshopListItem}>Levels: Secondary, JC, and polytechnic/university</li>
              </ul>
            </Section>

            {/* Workshop 2 */}
            <Section style={workshopSection}>
              <Text style={workshopTitle}>🤖 Gen AI & Tech Literacy</Text>
              <Text style={workshopDescription}>
                Interactive demos with live AI tools. Covers how AI works, responsible usage, bias, and ethics.
              </Text>
              <ul style={workshopList}>
                <li style={workshopListItem}>Students learn when to trust (and when NOT to trust) AI</li>
                <li style={workshopListItem}>Duration: 60-90 minutes</li>
                <li style={workshopListItem}>Levels: Secondary, JC, and polytechnic/university</li>
              </ul>
            </Section>

            {/* Workshop 3 */}
            <Section style={workshopSection}>
              <Text style={workshopTitle}>🛠️ Mini Hackathon</Text>
              <Text style={workshopDescription}>
                Team-based problem-solving experience. Perfect for innovation days or orientation events.
              </Text>
              <ul style={workshopList}>
                <li style={workshopListItem}>Themes: sustainability tech, community apps, AI for good</li>
                <li style={workshopListItem}>Duration: Half-day or full-day</li>
                <li style={workshopListItem}>Levels: Secondary school through university</li>
              </ul>
            </Section>

            {/* Workshop 4 */}
            <Section style={workshopSection}>
              <Text style={workshopTitle}>🌱 Tech & Sustainability</Text>
              <Text style={workshopDescription}>
                Explores tech&apos;s environmental impact (carbon cost of AI, e-waste). Discussion-based activities included.
              </Text>
              <ul style={workshopList}>
                <li style={workshopListItem}>Adaptable for geography, computing, or general science classes</li>
                <li style={workshopListItem}>Duration: 45-60 minutes</li>
                <li style={workshopListItem}>Levels: Secondary school through university</li>
              </ul>
            </Section>

            {/* Workshop 5 */}
            <Section style={workshopSection}>
              <Text style={workshopTitle}>🚀 Breaking Into Tech</Text>
              <Text style={workshopDescription}>
                Career guidance from working engineers. Debunks myths about who belongs in tech.
              </Text>
              <ul style={workshopList}>
                <li style={workshopListItem}>Real playbook for getting started in tech careers</li>
                <li style={workshopListItem}>Duration: 45-90 minutes</li>
                <li style={workshopListItem}>Levels: Upper secondary through university</li>
              </ul>
            </Section>

            <Heading style={h2}>Flexible Delivery Formats</Heading>
            <Text style={paragraph}>
              We fit around your timetable and event needs:
            </Text>
            <ul style={workshopList}>
              <li style={workshopListItem}><strong>Assembly Talks</strong> (30-60 min) - Engaging large-group sessions for the whole cohort</li>
              <li style={workshopListItem}><strong>Classroom Workshops</strong> (60-120 min) - Deeper, interactive small-group learning</li>
              <li style={workshopListItem}><strong>Mini Hackathons</strong> (Half or full day) - Team-based, project-driven problem solving</li>
              <li style={workshopListItem}><strong>Career & Mentorship Panels</strong> (45-90 min) - Live Q&A with practising engineers</li>
            </ul>

            <Heading style={h2}>Why Schools Choose RagTech</Heading>
            <ul style={workshopList}>
              <li style={workshopListItem}>✅ <strong>Real Engineers</strong> - Our speakers are actively working in the tech industry</li>
              <li style={workshopListItem}>✅ <strong>Customizable</strong> - All sessions can be tailored to your curriculum goals</li>
              <li style={workshopListItem}>✅ <strong>Interactive</strong> - Hands-on learning, not just lectures</li>
              <li style={workshopListItem}>✅ <strong>Inclusive</strong> - Especially popular for underrepresented groups in tech</li>
              <li style={workshopListItem}>✅ <strong>Flexible</strong> - In-person or virtual delivery options available</li>
            </ul>

            <Heading style={h2}>See Us in Action</Heading>
            <Text style={paragraph}>
              You can watch our speakers in action:
            </Text>
            <ul style={workshopList}>
              <li style={workshopListItem}>
                <Link href="https://www.youtube.com/watch?v=BPYt_Xs20q8" style={linkStyle}>
                  Navigating the Ethical Landscape of AI
                </Link>
              </li>
              <li style={workshopListItem}>
                <Link href="https://www.youtube.com/watch?v=oE_EWQUYpj8" style={linkStyle}>
                  Networking for Techies - JuniorDevSG
                </Link>
              </li>
              <li style={workshopListItem}>
                <Link href="https://www.youtube.com/watch?v=WJS2QeE1_-4" style={linkStyle}>
                  Interview Ready Online Course Series
                </Link>
              </li>
            </ul>

            <Heading style={h2}>Let's Tailor Something for {schoolName}</Heading>
            <Text style={paragraph}>
              I'd love to schedule a brief 15-minute call to discuss:
            </Text>
            <ul style={workshopList}>
              <li style={workshopListItem}>Your students' age groups and interests</li>
              <li style={workshopListItem}>Curriculum alignment opportunities</li>
              <li style={workshopListItem}>Event formats that work for your school</li>
              <li style={workshopListItem}>Customization options for your specific needs</li>
            </ul>

            <Text style={paragraph}>
              <strong>Visit our full workshop catalogue:</strong>{' '}
              <Link href="https://ragtechdev.com/workshops/school" style={linkStyle}>
                https://ragtechdev.com/workshops/school
              </Link>
            </Text>

            <Section style={ctaSection}>
              <Button href="https://ragtechdev.com/contact" style={button}>
                Get in Touch
              </Button>
            </Section>

            <Text style={signature}>
              Looking forward to potentially bringing real tech education to your students!
            </Text>

            <Text style={signature}>
              Best regards,<br />
              {senderName}<br />
              {senderTitle}<br />
              RagTech<br />
              {senderEmail}<br />
              {senderPhone}<br />
              <Link href="https://ragtechdev.com" style={linkStyle}>
                ragtechdev.com
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Default props for email preview
SchoolWorkshopOutreachEmail.PreviewProps = {
  schoolName: "Singapore International School",
  contactName: "Ms. Sarah Chen",
  senderName: "Natasha",
  senderTitle: "Co-founder",
  senderEmail: "natasha@ragtechdev.com",
  senderPhone: "+65 1234 5678",
} as SchoolWorkshopOutreachEmailProps;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 40px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
  height: 'auto',
};

const content = {
  padding: '0 40px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0 0 24px',
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '32px 0 16px',
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const workshopSection = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '8px',
  padding: '20px',
  margin: '0 0 20px',
};

const workshopTitle = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '0 0 8px',
};

const workshopDescription = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 12px',
};

const workshopList = {
  color: '#333333',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 16px',
  paddingLeft: '20px',
};

const workshopListItem = {
  marginBottom: '6px',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'underline',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#a8d8d4',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
};

const signature = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
};

// Speaker section styles
const speakerSection = {
  backgroundColor: '#f8f9fa',
  border: '1px solid #e9ecef',
  borderRadius: '8px',
  padding: '20px',
  margin: '0 0 16px',
};

const speakerContent = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
};

const speakerImageContainer = {
  flexShrink: 0,
};

const speakerImage = {
  borderRadius: '50%',
  border: '2px solid #e9ecef',
};

const speakerInfo = {
  flex: 1,
};

const speakerName = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.3',
  margin: '0 0 4px',
};

const speakerRole = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '1.3',
  margin: '0 0 8px',
};

const speakerDescription = {
  color: '#333333',
  fontSize: '14px',
  lineHeight: '1.5',
  margin: '0 0 8px',
};

const speakerHighlights = {
  color: '#555555',
  fontSize: '13px',
  lineHeight: '1.4',
  margin: '0',
};
