import styled from "styled-components";

export const CompanyIntro = styled.div`
  display: flex;
  margin: 50px 140px;
  align-items: center;
`;

export const CompanyExtraInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CompanySocials = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  width: 150px;
  margin: 0px;
  padding: 0px;
`;

export const TalentContent = styled.div`
  width: 1000px;
  height: 100%;
  outline: 5px solid var(--Dark);
  border-radius: 10px;
  margin: 100px;
  padding: 70px;
`;

export const TalentIntro = styled.div`
  display: flex;
  align-items: center;
`;

export const SkillList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 180px;
  justify-content: space-between;
`;

export const SkillBadge = styled.span`
  background-color: rgba(255, 236, 81, 0.8);
  color: var(--Dark);
  font-family: "Grotesk Medium";
  border-radius: 3px;
  outline: 1px solid var(--Dark);
  font-size: 18px;
  padding: 0px 20px;
  margin-right: 15px;
`;

export const Divider = styled.div`
  height: 1.5px;
  width: 800px;
  background-color: var(--Dark);
  position: relative;
  left: 0%;
  margin-top: 10px;
`;

export const HiddenContent = styled.div`
  display: flex;
  justify-content: center;
  width: 300px;
  height: 80px;
  align-items: center;
  filter: blur(0.6);
`;

export const PaymentTalent = styled.div`
  width: 400px;
  height: 350px;
  outline: 5px solid var(--Dark);
  border-radius: 10px;
  position: relative;
  left: 65%;
  bottom: 685px;
  padding: 70px;
`;
