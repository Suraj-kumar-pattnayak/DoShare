import * as React from 'react';

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export function EmailTemplate({ response }) {
  // console.log("RSP",{response});    
  
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Download File with DoShare</Preview>
        <Container>
          <Section style={logo}>
          <Row>
            <Column>
              <Img
                src="https://raw.githubusercontent.com/Suraj-kumar-pattnayak/email-assets/main/cute-bird.png"
                alt="My logo"
                width={50}
                height={50}
                style={{ display: 'block' }}
              />
            </Column>
          </Row>
        </Section>


          <Section style={content}>
            <Row>
              <Img
                src="https://raw.githubusercontent.com/Suraj-kumar-pattnayak/email-assets/main/undraw_files-uploading_qf8u.png"
                alt="File header illustration"
                width={500}
                height={160}
                style={{ display: 'block', margin: '0 auto', maxWidth: '100%', objectFit: 'contain' }}
              />

            </Row>

            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Hi {response?.emailToSend?.split('@')[0]},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Someone Shared a file with you.
                </Heading>

                <Text style={paragraph}>
                  <b>File Name: {response.fileName}</b>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: {response.fileType}</b>
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: {((response.fileSize)/1024/1024).toFixed(2)} MB</b>
                </Text>
                <Text
                  style={{
                    color: 'rgb(0,0,0, 0.5)',
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access and Download file in One Click.
                </Text>

                <Text style={paragraph}>
                 Now you can also share file with DoShare.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click On the Button to Access your File.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button} href={response?.fileUrl}>DOWNLOAD NOW</Button>
              </Column>
            </Row>
          </Section>

          <Section style={containerImageFooter}>
            <Img
            src="https://raw.githubusercontent.com/Suraj-kumar-pattnayak/email-assets/main/City%20skyline-cuate.png"
            alt="City footer decoration"
            width={500}
            height={100}
            style={{ display: 'block', margin: '0 auto', maxWidth: '100%', objectFit: 'contain' }}
          />

          </Section>

          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: 'rgb(0,0,0, 0.7)',
            }}
          >
            © 2025 | Suraj Pattanayak DEV @2025 Copyrights, 
            INDIA | surajkumarpattnayak@gmail.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate


const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: '20px',
};


const buttonContainer = {
  textAlign: 'center',  // what eeror fix?
};

const button = {
  backgroundColor: '#e00707',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  display: 'inline-block',
  padding: '12px 30px',
  textDecoration: 'none',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const image = {
  maxWidth: '100%',
};

const boxInfos = {
  padding: '20px',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};