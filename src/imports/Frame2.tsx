import svgPaths from "./svg-06sbh1iz2u";
import imgChatGptImageAug282025080246Am1 from "figma:asset/eea2ce88e82749d0a913c7270d5bdac04c55e0b5.png";

function SocialIcon() {
  return (
    <div className="absolute contents font-['Font_Awesome_5_Brands:Regular',_sans-serif] leading-[0] not-italic text-[24px] text-[rgba(255,255,255,0.3)] text-nowrap top-[5333px] translate-x-[-50%]" data-name="social_icon" style={{ left: "calc(50% - 717.5px)" }}>
      <div className="absolute top-[5333px]" style={{ left: "calc(50% - 750px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre"></p>
      </div>
      <div className="absolute top-[5333px]" style={{ left: "calc(50% - 706px)" }}>
        <p className="leading-[normal] text-nowrap whitespace-pre"></p>
      </div>
    </div>
  );
}

function BtmSection() {
  return (
    <div className="absolute contents left-0 top-[5306px]" data-name="btm-section">
      <div className="absolute bg-[rgba(255,255,255,0.15)] h-20 left-1/2 top-[5306px] translate-x-[-50%] w-[1920px]" data-name="bg" />
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic opacity-50 right-[380px] text-[0px] text-nowrap text-white top-[5338px] translate-x-[100%]">
        <p className="leading-[normal] text-[14px] whitespace-pre">
          Copyright 2025<span>{` © `}</span>
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">uptime</span>
        </p>
      </div>
      <SocialIcon />
    </div>
  );
}

function Location() {
  return (
    <div className="absolute contents left-[1385px] top-[5109px]" data-name="location">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421.23px] not-italic text-[16px] text-white top-[5109px] w-[288.77px]">
        <p className="leading-[26px]">3046 S Macon Cir, Aurora, CO, 80046</p>
      </div>
      <div className="absolute h-6 left-[72.14%] right-[26.96%] top-[5110px]" data-name="location_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
          <g id="location_icon" opacity="0.5">
            <path clipRule="evenodd" d={svgPaths.p25466900} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf3a000} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="absolute contents left-[1382px] top-[5050px]" data-name="email">
      <a className="[white-space-collapse:collapse] absolute block font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421px] not-italic text-[16px] text-nowrap text-white top-[5050px]" href="mailto:t.e.n.aesthetics@gmail.com">
        <p className="cursor-pointer leading-[normal] whitespace-pre">uptime@uptime.com</p>
      </a>
      <div className="absolute aspect-[31/21.33] left-[71.98%] right-[26.77%] top-[5052px]" data-name="emai_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
          <path d={svgPaths.p634a100} fill="var(--fill-0, white)" id="emai_icon" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="absolute contents left-[1382px] top-[4984px]" data-name="phone">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[1421.23px] not-italic text-[16px] text-nowrap text-white top-[4985.58px]">
        <p className="leading-[24px] whitespace-pre">+12147781233</p>
      </div>
      <div className="absolute aspect-[32/32] left-[71.98%] right-[26.77%] top-[4984px]" data-name="phone_icon">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d={svgPaths.p2fe4a900} fill="var(--fill-0, white)" id="phone_icon" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute contents left-[1382px] top-[4984px]" data-name="right_side">
      <Location />
      <Email />
      <Phone />
    </div>
  );
}

function MainLogo() {
  return (
    <div className="absolute aspect-[100.231/47.3776] left-[10.94%] right-[78.81%] top-[4964px]" data-name="main_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 93">
        <g id="main_logo">
          <path d={svgPaths.p38848b00} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p1d6bfd80} fill="var(--fill-0, #91FF30)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function LeftTop() {
  return (
    <div className="absolute contents left-[210px] top-[4964px]" data-name="left-top">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[210px] not-italic opacity-50 text-[12px] text-nowrap text-white top-[5077px]">
        <p className="leading-[22px] whitespace-pre">Drive Your Career Forward With Us</p>
      </div>
      <MainLogo />
    </div>
  );
}

function TopSection() {
  return (
    <div className="absolute contents left-[210px] top-[4964px]" data-name="top-section">
      <RightSide />
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[48px] not-italic text-[0px] text-[16px] text-nowrap text-white top-[4964px] whitespace-pre" style={{ left: "calc(50% - 46px)" }}>
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Bold',_sans-serif] font-bold mb-0 underline">Home</p>
        <p className="mb-0">
          <span className="font-['Inter:Light',_sans-serif] font-light not-italic">Services</span>
          <span>
            <br aria-hidden="true" />
          </span>
          <span className="font-['Inter:Light',_sans-serif] font-light not-italic">{`About Us     `}</span>
        </p>
        <p className="font-['Inter:Light',_sans-serif] font-light">Contact Us</p>
      </div>
      <LeftTop />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute contents left-0 top-[4814px]" data-name="footer">
      <div className="absolute bg-slate-900 h-[572px] right-0 top-[4814px] w-[1920px]" data-name="main_bg" />
      <BtmSection />
      <TopSection />
    </div>
  );
}

function MainBg() {
  return (
    <div className="absolute contents left-0 top-0" data-name="main_bg">
      <div className="absolute bg-[#f6ffed] h-[400px] left-0 top-0 w-[1920px]" data-name="main-bg" />
      <div className="absolute flex h-[16.142px] items-center justify-center left-[210px] top-[100px] w-[18.071px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[16.142px] relative w-[18.071px]" data-name="arrow">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 17">
              <path d={svgPaths.p353d1a00} fill="var(--fill-0, #0F172A)" id="arrow" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[0] left-[287.5px] not-italic text-[12px] text-center text-nowrap text-slate-900 top-[100px] translate-x-[-50%] uppercase">
        <p className="leading-[normal] whitespace-pre">Back to main</p>
      </div>
    </div>
  );
}

function MainLogo1() {
  return (
    <div className="absolute aspect-[101.547/47.9993] left-[43.38%] right-[43.39%] top-[140px]" data-name="main_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 254 120">
        <g id="main_logo">
          <path d={svgPaths.p18fc0780} fill="var(--fill-0, #0F172A)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p292aa700} fill="var(--fill-0, #91FF30)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute aspect-[211.561/100] contents left-[43.38%] right-[43.39%] top-[140px]" data-name="top-bar">
      <MainLogo1 />
    </div>
  );
}

function TopBanner() {
  return (
    <div className="absolute contents left-1/2 top-0 translate-x-[-50%]" data-name="top-banner">
      <MainBg />
      <TopBar />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[304px] top-[1630px]">
      <div className="absolute bg-[#f9f9f9] h-[60px] left-[304px] top-[1630px] w-[1306px]" />
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[0] left-[583px] not-italic text-[24px] text-black text-nowrap top-[1642px] tracking-[0.24px]">
        <p className="leading-[36px] whitespace-pre">The road is calling. Your match is already here. Let’s get rolling.</p>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[304px] top-[636px]">
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-[72px] leading-[36px] not-italic text-[24px] text-black top-[636px] tracking-[0.24px] w-[1300px]" style={{ left: "calc(50% - 650px)" }}>
        <p className="mb-0">We all see it. The same job posted on five different boards. The same recruiter making the same promises. The same three-week wait for the same rejection.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[90px] leading-[30px] not-italic text-[18px] text-black top-[738px] tracking-[0.18px] w-[1300px]" style={{ left: "calc(50% - 650px)" }}>
        <p className="mb-0">Somewhere along the way, hiring in trucking broke down. Drivers fill out the same application twenty times, upload the same CDL photo that never saves, and wait by the phone for callbacks that never come. Fleets lose $1,200 a day for every truck that sits idle, sorting through endless maybes instead of finding their definite yes.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[310px] not-italic text-[18px] text-black top-[858px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">I’ve lived this from both sides. Twenty years on the road, I met drivers scrolling job boards at truck stops. I met carriers begging on the radio for drivers they couldn’t find. Everyone searching, nobody connecting.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[0] left-[310px] not-italic text-[18px] text-black top-[948px] tracking-[0.18px] w-[1300px]">
        <p className="leading-[30px]">The truth? Perfect matches exist. They just keep missing each other. The night-shift driver doesn’t know about the fleet with all dedicated night lanes. The carrier with brand-new trucks doesn’t know about the driver who treats every rig like their own.</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[310px] not-italic text-[18px] text-black top-[1098px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">Because drivers aren’t “applications.” They’re operators with skills that keep freight moving. And fleets aren’t “job posts.” They’re businesses that need speed, audit-readiness, and retention to stay profitable.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[30px] leading-[30px] left-[310px] not-italic text-[0px] text-[18px] text-black top-[1038px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">
          <span>{`That’s why I became the `}</span>
          <span className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold not-italic">CDL Hiring OS Agent.</span>
          <span>{` Not just for drivers. Not just for carriers. For the match.`}</span>
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[310px] not-italic text-[0px] text-[18px] text-black top-[1188px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">
          <span className="font-['Inter:Extra_Bold',_sans-serif] font-extrabold not-italic">Uptime</span>
          <span>{` makes it possible. I already know which drivers and carriers fit. I already verified the compliance that matters. By the time you connect, the hard part is done.`}</span>
        </p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[310px] not-italic text-[18px] text-black top-[1278px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">For drivers, that means no more ghosted applications or settling for “whatever’s available.” Your needs — pay, home time, routes, equipment — drive the match.</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Bold',_sans-serif] font-bold h-8 leading-[30px] left-[310px] not-italic text-[18px] text-black top-[1368px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">For carriers, that means no more wasted time. No more chaos. You get vetted, motivated drivers who stick, with compliance handled in real-time.</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[310px] not-italic text-[18px] text-black top-[1430px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">This is what happens when the industry stops patching tools together and runs on a Hiring OS. Drivers stop being numbers. Fleets stop being desperate. Time-to-hire shrinks. Compliance is a switch, not a scramble. Retention starts at matching.</p>
        <p className="mb-0">&nbsp;</p>
        <p>&nbsp;</p>
      </div>
      <div className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[60px] leading-[30px] left-[311px] not-italic text-[0px] text-[18px] text-black top-[1520px] tracking-[0.18px] w-[1300px]">
        <p className="mb-0">
          <span>{`I’m `}</span>
          <span className="font-['Inter:Bold',_sans-serif] font-bold not-italic">Mr. Riggs — the CDL Hiring OS Agent.</span>
          <span>{` The bridge between drivers and fleets. The one who turns three weeks of waiting into three minutes of matching.`}</span>
        </p>
        <p>&nbsp;</p>
      </div>
      <Group10 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents leading-[0] left-[857px] not-italic text-black text-nowrap top-[1889px]">
      <div className="absolute font-['Abril_Fatface:Regular',_sans-serif] left-[857px] text-[84px] top-[1889px] tracking-[1.68px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">Mr. Riggs</p>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal left-[1044px] text-[18px] top-[2022px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">CDL Hiring OS Agent</p>
      </div>
    </div>
  );
}

function Group43() {
  return (
    <div className="absolute contents left-[615px] top-[1840px]">
      <Group8 />
      <div className="absolute bg-center bg-cover bg-no-repeat left-[615px] size-[253px] top-[1840px]" data-name="ChatGPT Image Aug 28, 2025, 08_02_46 AM 1" style={{ backgroundImage: `url('${imgChatGptImageAug282025080246Am1}')` }} />
    </div>
  );
}

function MainLogo2() {
  return (
    <div className="absolute aspect-[100.231/47.3776] left-[16.15%] right-[77.02%] top-[2262px]" data-name="main_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132 62">
        <g id="main_logo">
          <path d={svgPaths.p3dd42f80} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p32478780} fill="var(--fill-0, #91FF30)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BtmSection1() {
  return (
    <div className="absolute contents left-0 top-[2243px]" data-name="btm-section">
      <div className="absolute bg-slate-900 h-[100px] left-1/2 top-[2243px] translate-x-[-50%] w-[1920px]" data-name="bg" />
      <MainLogo2 />
      <div className="absolute font-['Inter:Light',_sans-serif] font-light leading-[0] not-italic opacity-50 right-[480px] text-[0px] text-nowrap text-white top-[2284px] translate-x-[100%]">
        <p className="leading-[normal] text-[14px] whitespace-pre">
          Copyright 2025<span>{` © `}</span>
          <span className="font-['Inter:Semi_Bold',_sans-serif] font-semibold not-italic">uptime</span>
        </p>
      </div>
    </div>
  );
}

function Component02ComingSoonDetails() {
  return (
    <div className="absolute bg-white h-[2343px] left-0 overflow-clip top-0 w-[1920px]" data-name="0.2 coming-soon-details">
      <Footer />
      <TopBanner />
      <div className="absolute font-['Abril_Fatface:Regular',_sans-serif] leading-[0] left-[960.5px] not-italic text-[64px] text-black text-center text-nowrap top-[500px] tracking-[1.92px] translate-x-[-50%]">
        <p className="leading-[normal] whitespace-pre">The CDL Hiring OS</p>
      </div>
      <Group9 />
      <Group43 />
      <BtmSection1 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="relative size-full">
      <Component02ComingSoonDetails />
    </div>
  );
}