import { Header } from './Header';
import './Header.css';
import './ErrorPage.css';

export function ErrorPage(){
    return (
        <>
        <div>
            <Header />
        </div>
        <div className='error-code-container'>
            <p className='error-code'>404 Page Not Found</p>
        </div>
        </>
    )
}