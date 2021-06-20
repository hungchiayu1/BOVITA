import classes from './BrandDescription.module.css';

const Descriptions = ({descriptions})=>
{
    return (
   
   <div className = {classes.DescriptionContainer}>
        <p className = {classes.DescriptionFont}>{descriptions}</p>
    </div>);
 
}


export default Descriptions