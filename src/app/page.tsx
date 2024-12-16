import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Card className='w-[520px] bg-[#1D1D21] p-8 m-0 space-y-8'>
      <CardHeader className='gap-y-4 p-0'>
        <CardTitle className='text-2xl font-bold'>Card title</CardTitle>
        <CardDescription className='font-normal'>Nullam convallis a volutpat fermentum. Risus mattis diam platea sed. Neque tincidunt justo potenti nulla cursus eget posuere. Eget et condimentum aliquam malesuada aenean est quam.</CardDescription>
      </CardHeader>
      <CardContent className='p-0'>
        <Label className='text-[13px] font-semibold'>Label</Label>
        <Select>
          <SelectTrigger className='bg-[#0D0D0F] rounded-lg border border-[#5C5C66] h-12'>
            <SelectValue placeholder="Select an option..." />
          </SelectTrigger>
          <SelectContent className='border bg-[#0D0D0F] border-[#5C5C66]'>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
            <SelectItem value="4">Option 4</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
      <CardFooter className='p-0'>
        <Button className='w-full h-12 font-bold'>Confirm</Button>
      </CardFooter>
    </Card>
  );
};

export default Home