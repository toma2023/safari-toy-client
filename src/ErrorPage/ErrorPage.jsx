import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (

        <div className='grid mt-10 justify-center items-center '>
           
            
            <img className='w-96 h-96 text-center rounded-md mb-8' src="https://i.ibb.co/rwxnjsC/error-6482984-960-720.jpg" alt="" />
            <h4 className='text-3xl font-semibold'>Oops, something went wrong, Error code: 404</h4>
            <Link to="/"> <button className='mt-6 mb-20 mx-32 btn btn-outlined'><span className='text-white mr-2'> <FaArrowLeft></FaArrowLeft></span>  Go Back To Home</button></Link>

        </div>

    );
};

export default ErrorPage;