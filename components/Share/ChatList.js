import { ScrollArea } from "@/components/ui/scroll-area";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BsInfoCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

export default function ChatList() {
  return (
    <>
      {/* New Chat button */}
      <div className="p-4">
        <button
          aria-label="button"
          className="flex items-center justify-center p-0 gap-2 w-full md:w-[268px] h-[40px] rounded-[8px] font-medium 
          text-[14px] leading-[140%] text-white bg-[#000A11] dark:bg-white dark:text-[#000A11]"
          type="button"
          id="button-addon2"
        >
          <FaPlus />
          New Chat
        </button>
      </div>

      {/* Chat list scrollable area */}
      <ScrollArea className="h-[75%] md:h-[442px] p-4">
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className={`flex items-center justify-between px-[12px] gap-[10px] h-[40px] cursor-pointer ${index === 0 ? "bg-[#E4E4E4] dark:bg-zinc-700 dark:text-white rounded-[8px]" : "border-b dark:border-zinc-700 rounded-none"} `}
          >
            New Chat
            <FaEllipsisVertical />
          </li>
        ))}
      </ScrollArea>

      {/* Settings and Help section */}
      <div className="flex flex-col items-start border-t dark:border-zinc-700 border-[#E4E4E4]">
        <ui className="list-none mb-0 mt-2 chat-users-tab">
          {/* Help item */}
          <li className="flex items-center p-[12px] gap-[10px] rounded-[8px] dark:text-white">
            <BsInfoCircle /> Help
          </li>

          {/* Settings dialog trigger */}
          <Dialog>
            <DialogTrigger>
              <li className="flex items-center px-[12px] gap-[10px] rounded-[8px] cursor-pointer dark:text-white">
                <IoSettingsOutline /> Settings
              </li>
            </DialogTrigger>
            <DialogContent className="max-w-fit">
              <DialogHeader>
                <DialogTitle className="py-3">Settings</DialogTitle>
                <DialogDescription className="border-t">
                  <div className="flex flex-row items-start p-0">
                    <div className="flex flex-col items-center gap-4 py-4 pr-3 border-r border-[#E4E4E4]">
                      <div className="w-40 h-10 px-4 pt-2 bg-[#E4E4E4] rounded-[8px] cursor-pointer">
                        General
                      </div>
                      <div className="w-40 h-10 px-4 pt-2 border-b cursor-pointer">
                        Profile
                      </div>
                      <div className="w-40 h-10 px-4 pt-2 border-b cursor-pointer">
                        Security
                      </div>
                      <div className="w-40 h-10 px-4 pt-2 border-b cursor-pointer">
                        Notification
                      </div>
                    </div>
                    <div className="">
                      {/* General  */}
                      <div className="flex flex-col items-start p-[16px] gap-[16px]">
                        <div className="w-full flex flex-row justify-between items-center p-0 gap-[200px]">
                          <div className="font-semibold text-[16px] leading-[140%] text-[#000A11]">
                            Theme
                          </div>
                          <div>
                            <Select defaultValue="light">
                              <SelectTrigger className="w-[100px]">
                                <SelectValue placeholder="Theme" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="light" selected>
                                  Light
                                </SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="w-full flex flex-row justify-between items-center p-0 gap-[200px]">
                          <div className="font-semibold text-[16px] leading-[140%] text-[#000A11]">
                            Language
                          </div>
                          <div>
                            <Select defaultValue="en">
                              <SelectTrigger className="w-[100px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="bn">Bangla</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="w-full flex flex-row justify-between items-center p-0 gap-[200px]">
                          <div className="font-semibold text-[16px] leading-[140%] text-[#000A11]">
                            Voice
                          </div>
                          <div>
                            <Select defaultValue="oman">
                              <SelectTrigger className="w-[100px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="en">English</SelectItem>
                                <SelectItem value="oman">Oman</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </ui>
      </div>
    </>
  );
}
