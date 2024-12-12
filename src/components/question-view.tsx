import { useState } from 'react';
import { RadioInput } from './form';
import { Button, Card, } from './ui';
import YesComponent from './view/yesComponent';
import MaybeComponent from './view/maybeComponent';


type QuestionViewProps = {
   heading: string;
   question: string;
   options: { label: string; value: string }[];
}

const QuestionView = ({ heading, question, options }: QuestionViewProps) => {
   const [selectedValue, setSelectedValue] = useState<string | null>(null);
   const [showComponent, setShowComponent] = useState<string | null>(null);

   const handleButtonClick = () => {
      if (selectedValue) {
         setShowComponent(selectedValue);
      }
   };

   return (
      <div>
         {showComponent === null ? (
            <Card>
               <h1>{heading}</h1>
               <p>{question}</p>
               <RadioInput
                  name="test"
                  options={options}
                  onChange={(e) => setSelectedValue(e.target.value)}
               />
               <Button onClick={handleButtonClick}>Let’s Get Started!</Button>
            </Card>
         ) : showComponent === 'yes' ? (
            <YesComponent />
         ) : (
            <MaybeComponent />
         )}
      </div>
   );
};




export default QuestionView;
