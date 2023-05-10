import React, { useState } from "react";
import styled from "styled-components";
import BG from "../assets/services-background-img-2-300x133.png";

const Section = styled.div`
  width: 100vw;
  position: relative;
  min-height: 100vh;
  
`;
const Container = styled.div`
  width: 90%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 58em) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 58em) {
    width: 100%;
  }
`;
const Box2 = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 58em) {
    width: 100%;
  }
`;
const Title = styled.span`
  display: flex;
  font-family: ${(props) => props.theme.fontold};
  letter-spacing: -0.01em;
  color: ${props => props.theme.colorTitle};
  font-size: 35px;
  line-height: 1.05714em;
  font-weight: 300;
  margin: 25px 0;
  -ms-word-wrap: break-word;
  word-wrap: break-word;
`;
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
const FormContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  outline: none;
  color: #818181;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 0;
  cursor: pointer;
`;
const Button = styled.button`
  background-color: orange;
  font-size: 14px;
  color: white;
  padding: 5px 10px;
  width: 100%;
  line-height: 2em;
  letter-spacing: 0.03em;
  text-decoration: none;
  text-transform: uppercase;
  padding: 10px 39px;
  background-color: #92c5da;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background-color: #1cbedf;
  }
`;

const TextContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  padding: 30px 30px;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: whitesmoke;
`;
const TextR = styled.span`
  font-family: ${(props) => props.theme.fontold};
  font-size: 35px;
  color: ${props => props.theme.colorTitle};
`;
const TextP = styled.p`
  font-size: 14px;
  color: #818181;
  font-weight: 300;
  padding-top: 20px;
`;
const TextUl = styled.ul`
  padding-top: 40px;
  padding-bottom: 30px;
  list-style: none;
`;
const BookingSelect = styled.select`
  width: 100%;
  padding: 12px 12px;
  outline: none;
  color: #818181;
  background-color: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 0;
  cursor: pointer;
`;
const TypeOf = styled.option``;
const TextLi = styled.li`
  color: #818181;
  font-family: open sans, Sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  

  &::before {
    content: "+ ";
  }
`;

const TextBg = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;

const Test = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(date);
    const formattedTime = new Intl.DateTimeFormat("fr-FR", {
      hour: "numeric",
      minute: "numeric",
    }).format(time);
    const message = `Name: ${name}%0AEmail: ${email}%0AServices: ${services}%0ADate: ${formattedDate}%0ATime: ${formattedTime}`;
    window.location.href = `https://wa.me/1234567890?text=${message}`;
  };

  return (
    <Section>
      <Container>
        <Box>
          <Title>Book an Appointment</Title>
          <Form>
            <FormContainer>
              <Input placeholder="Name" />
              <Input
                placeholder="Email Address"
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <BookingSelect>
                <TypeOf value="">Select a service</TypeOf>
                <TypeOf value="Service 1">Service 1</TypeOf>
                <TypeOf value="Service 2">Service 2</TypeOf>
                <TypeOf value="Service 3">Service 3</TypeOf>
              </BookingSelect>
              <Input placeholder="Select a Date" />
              <Button>Make An Appointment</Button>
            </FormContainer>
          </Form>
        </Box>
        <Box2>
          <TextContainer>
            <TextR>Spa center</TextR>
            <TextP>
              Putent vivendo qualisque vim cu, dolores scriptorem eum an, ea
              sumo denique est. In nisl possim pri, ei ipsum error efficiantur
              his. Et per audire menandri, mel eu idque accommodare, in mel
              viris adipiscing. Impetus quaeque interesset est cu, aeterno
              voluptaria voluptatibus eos.
            </TextP>
            <TextUl>
              <TextLi>Eum facer an dolores pro cetero</TextLi>
              <TextLi>Eum facer an dolores pro cetero</TextLi>
              <TextLi>Eum facer an dolores pro cetero</TextLi>
              <TextLi>Eum facer an dolores pro cetero</TextLi>
              <TextBg></TextBg>
            </TextUl>
          </TextContainer>
        </Box2>
      </Container>
    </Section>
  );
};

export default Test;
