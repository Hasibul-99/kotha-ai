import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function ChatContent() {
  const [showChat, setShowChat] = useState(true);

  return (
    <>
      <div
        className="chat-content h-[80vh] md:h-[515px] dark:bg-gray-900 dark:text-white"
        id="main-chat-content"
        data-simplebar="init"
      >
        {showChat ? (
          <>
            <ScrollArea className="h-full md:h-[500px] dark:dark">
              <div className="flex flex-col items-start gap-6 p-6">
                <ChatMessage
                  userImage="/assets/images/user.png"
                  message="What is web design What is web design What is web design What is web design What is web design"
                  userIcon="/assets/icons/edit.svg"
                />
                <ChatMessage
                  userImage="/assets/images/logo.png"
                  message="Web design is essentially the art and science of crafting websites. It encompasses a blend of creativity and functionality to deliver an engaging and informative experience for users. Here's a breakdown of its key aspects: Visual Appeal: Web designers focus on the aesthetics of a website, including layout, colors, fonts, and imagery. They strive to create a visually pleasing and consistent user interface (UI) that reflects the brand identity. User Experience (UX): This is paramount in web design. It's about ensuring users can easily navigate and find the information they need on the website. A well-designed website is intuitive and user-friendly, fostering a positive user experience. Functionality: Behind the attractive facade lies a website's functionality. Web designers plan and implement features that allow users to interact with the website as intended. This may involve forms, calls to action, or e-commerce functionalities. Responsiveness: In today's mobile-first world, websites need to adapt to different screen sizes and devices. Web designers ensure websites display seamlessly across desktops, tablets, and smartphones. Web design vs. Web development: It's important to distinguish between these two often confused terms. Web design focuses on the visual and user experience aspects, while web development translates those designs into a functioning website using coding languages like HTML, CSS, and JavaScript."
                  userIcon="/assets/icons/voice.svg"
                  additionalIcons={[
                    "/assets/icons/reset.svg",
                    "/assets/icons/copy.svg",
                    "/assets/icons/love.svg",
                  ]}
                />
                <ChatMessage
                  userImage="/assets/images/user.png"
                  message="What is web design"
                  userIcon="/assets/icons/edit.svg"
                />
                <ChatMessage
                  userImage="/assets/images/logo.png"
                  message="Web design is essentially the art and science of crafting websites. It encompasses a blend of creativity and functionality to deliver an engaging and informative experience for users. Here's a breakdown of its key aspects: Visual Appeal: Web designers focus on the aesthetics of a website, including layout, colors, fonts, and imagery. They strive to create a visually pleasing and consistent user interface (UI) that reflects the brand identity. User Experience (UX): This is paramount in web design. It's about ensuring users can easily navigate and find the information they need on the website. A well-designed website is intuitive and user-friendly, fostering a positive user experience. Functionality: Behind the attractive facade lies a website's functionality. Web designers plan and implement features that allow users to interact with the website as intended. This may involve forms, calls to action, or e-commerce functionalities. Responsiveness: In today's mobile-first world, websites need to adapt to different screen sizes and devices. Web designers ensure websites display seamlessly across desktops, tablets, and smartphones. Web design vs. Web development: It's important to distinguish between these two often confused terms. Web design focuses on the visual and user experience aspects, while web development translates those designs into a functioning website using coding languages like HTML, CSS, and JavaScript."
                  userIcon="/assets/icons/voice.svg"
                  additionalIcons={[
                    "/assets/icons/reset.svg",
                    "/assets/icons/copy.svg",
                    "/assets/icons/love.svg",
                  ]}
                />
                <ChatMessage
                  userImage="/assets/images/user.png"
                  message="What is web design"
                  userIcon="/assets/icons/edit.svg"
                />
                <ChatMessage
                  userImage="/assets/images/logo.png"
                  message="Web design is essentially the art and science of crafting websites. It encompasses a blend of creativity and functionality to deliver an engaging and informative experience for users. Here's a breakdown of its key aspects: Visual Appeal: Web designers focus on the aesthetics of a website, including layout, colors, fonts, and imagery. They strive to create a visually pleasing and consistent user interface (UI) that reflects the brand identity. User Experience (UX): This is paramount in web design. It's about ensuring users can easily navigate and find the information they need on the website. A well-designed website is intuitive and user-friendly, fostering a positive user experience. Functionality: Behind the attractive facade lies a website's functionality. Web designers plan and implement features that allow users to interact with the website as intended. This may involve forms, calls to action, or e-commerce functionalities. Responsiveness: In today's mobile-first world, websites need to adapt to different screen sizes and devices. Web designers ensure websites display seamlessly across desktops, tablets, and smartphones. Web design vs. Web development: It's important to distinguish between these two often confused terms. Web design focuses on the visual and user experience aspects, while web development translates those designs into a functioning website using coding languages like HTML, CSS, and JavaScript."
                  userIcon="/assets/icons/voice.svg"
                  additionalIcons={[
                    "/assets/icons/reset.svg",
                    "/assets/icons/copy.svg",
                    "/assets/icons/love.svg",
                  ]}
                />
                <ChatMessage
                  userImage="/assets/images/user.png"
                  message="What is web design"
                  userIcon="/assets/icons/edit.svg"
                />
                <ChatMessage
                  userImage="/assets/images/logo.png"
                  message="Web design is essentially the art and science of crafting websites. It encompasses a blend of creativity and functionality to deliver an engaging and informative experience for users. Here's a breakdown of its key aspects: Visual Appeal: Web designers focus on the aesthetics of a website, including layout, colors, fonts, and imagery. They strive to create a visually pleasing and consistent user interface (UI) that reflects the brand identity. User Experience (UX): This is paramount in web design. It's about ensuring users can easily navigate and find the information they need on the website. A well-designed website is intuitive and user-friendly, fostering a positive user experience. Functionality: Behind the attractive facade lies a website's functionality. Web designers plan and implement features that allow users to interact with the website as intended. This may involve forms, calls to action, or e-commerce functionalities. Responsiveness: In today's mobile-first world, websites need to adapt to different screen sizes and devices. Web designers ensure websites display seamlessly across desktops, tablets, and smartphones. Web design vs. Web development: It's important to distinguish between these two often confused terms. Web design focuses on the visual and user experience aspects, while web development translates those designs into a functioning website using coding languages like HTML, CSS, and JavaScript."
                  userIcon="/assets/icons/voice.svg"
                  additionalIcons={[
                    "/assets/icons/reset.svg",
                    "/assets/icons/copy.svg",
                    "/assets/icons/love.svg",
                  ]}
                />
                <ChatMessage
                  userImage="/assets/images/user.png"
                  message="What is web design"
                  userIcon="/assets/icons/edit.svg"
                />
              </div>
            </ScrollArea>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center p-[100px_24px_24px] gap-[24px]">
              <div>
                <img
                  src="/assets/images/kotha.png"
                  className="w-20 h-20"
                  alt="kotha"
                />
              </div>
              <div className="font-bold text-[24px] leading-[150%] text-center text-[#000A11]">
                <h1>Hello, Omar</h1>
                <h1>How can I help you today?</h1>
              </div>
              <div className="flex flex-row flex-wrap justify-center items-start gap-4">
                <ActionCard text="Teach me the concept of game theory in simple terms" />
                <ActionCard text="Help me draft a response to a friend" />
                <ActionCard text="Explain the key rules of rugby, starting with the basics" />
                <ActionCard text="Explain nostalgia to a kindergartener" />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex items-start p-6 gap-6 bg-white border-t border-[#E4E4E4] dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full">
          <input
            className="h-14 w-full flex items-center px-4 gap-2 bg-[#F9F9F9] border border-[#E4E4E4] rounded-lg  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-300"
            placeholder="Write here."
            type="text"
          />
        </div>
        <div>
          <img src="/assets/images/send.png" alt="send" />
        </div>
      </div>
    </>
  );
}

const ChatMessage = ({ userImage, message, userIcon, additionalIcons }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10">
      <img src={userImage} alt="user" className="w-10 h-10" />
    </div>
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="md:max-w-[70%] p-4 border border-[#E4E4E4] rounded-lg font-medium text-[14px] leading-[140%] text-[#000A11] bg-white dark:bg-gray-800 dark:text-white">
        {message}
      </div>
      <div className="flex items-start gap-4">
        <img src={userIcon} alt="icon" />
        {additionalIcons?.map((icon, index) => (
          <img key={index} src={icon} alt="icon" />
        ))}
      </div>
    </div>
  </div>
);

const ActionCard = ({ text }) => (
  <div className="p-4 border border-[#E4E4E4] rounded-lg font-medium text-[14px] leading-[140%] text-[#000A11] dark:text-white bg-white dark:bg-gray-800">
    {text}
  </div>
);
