"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/Icons";

const SkillsMobile = () => {
  return (
    <div className="pt-16">
      <h2 className="text-4xl font-semibold text-center text-pine-green">
        Skills
      </h2>
      <Tabs
        defaultValue="hard"
        className="flex flex-col items-center w-full pt-5">
        <TabsList className="flex space-x-5 bg-transparent border h-fit border-battleship-gray">
          <TabsTrigger
            className="w-28 text-3xl data-[state=active]:text-pine-green"
            value="hard">
            Hard
          </TabsTrigger>
          <Separator className="h-10 bg-gray-300" orientation="vertical" />
          <TabsTrigger
            className="w-28 text-3xl data-[state=active]:text-pine-green"
            value="soft">
            Soft
          </TabsTrigger>
        </TabsList>
        <TabsContent value="hard" className="h-[320px]">
          <div className="flex flex-col items-center justify-center pt-5">
            <div className="grid items-center grid-cols-3 justify-items-center gap-x-3 gap-y-4 md:grid-cols-6">
              <Icons.html />
              <Icons.css />
              <Icons.js />
              <Icons.react />
              <Icons.next />
              <Icons.tailwindcss />
            </div>

            <div className="grid items-center grid-cols-3 pt-5 justify-items-center gap-x-4 gap-y-4 max-w-[380px]">
              <Icons.python className="fill-onyx" />
              <Icons.node />
              <Icons.docker />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="soft" className="h-[320px]">
          <div className="flex flex-col items-center justify-center pt-4 space-y-4">
            <div className="w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx">
              <Icons.cogs />
              <p className="text-2xl font-medium text-onyx">Problem solving</p>
            </div>
            <div className="w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx">
              <Icons.chart />
              <p className="text-2xl font-medium text-onyx">
                Critical thinking
              </p>
            </div>
            <div className="w-[340px] h-[85px] flex items-center justify-center px-5 space-x-5 border rounded-lg shadow-md border-onyx">
              <Icons.shapes />
              <p className="text-2xl font-medium text-onyx">Adaptability</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SkillsMobile;
