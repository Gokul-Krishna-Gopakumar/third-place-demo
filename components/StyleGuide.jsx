"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Link from "next/link";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const StyleGuide =() =>{

    const [date, setDate] = React.useState();

    return (
        <>
            <div className="flex flex-col gap-y-4 p-24">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>heading 3</h3>
                <p>
                Lorem ipsum dolor sit amet. Et nobis consequuntur aut voluptas minus ut Quis perferendis sed porro excepturi hic galisum officia vel laboriosam temporibus! Ab nihil aliquid rem similique similique aut debitis culpa ea nostrum odit qui quam eveniet quo dolore dolor eum temporibus dolor.

                Qui facilis ratione eum nemo dolorem eos eius autem est inventore modi. Ut consectetur expedita et quia tempore aut rerum blanditiis est Quis quia! Aut libero rerum qui sint blanditiis ut dolore fugiat.
                </p>    
            </div>
            <div className='bg-black p-24 flex flex-col gap-y-4'>
                    <Link href='/'>Link</Link>
                    <Button variant='default'>Button 1</Button>
                    <Button variant='orange'>Button 2</Button>
                    <Button variant='input'>Button 3</Button>
                    <Button variant='orange' size='sm'>
                        Button 2
                    </Button>
                <div>
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input type='firstname' id='firstname' />
                </div>
                <div>
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input type='lastname' id='lastname' />
                </div>
                
                    {/* calendar */}
                
                <div>
                    <Label>date</Label>
                    <Popover>
        <PopoverTrigger asChild>
        <Button
          variant={"input"}
          className={cn(
            "w-full justify-start text-left font-normal",
            
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default StyleGuide;