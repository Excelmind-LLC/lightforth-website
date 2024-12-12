
import { Button, Card, } from '../ui';
import { CircleIcon } from '../../assets/icon';

const YesComponent = () => {
   return (
      <Card>
         <CircleIcon className='size-40' />
         <h2>Congratulations</h2>
         <p>You’re about to experience the future of job searching with Lightforth.</p>
         <Button>Let's go</Button>
      </Card>
   );
};

export default YesComponent;