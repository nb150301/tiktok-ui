import Header from '~/components/Layouts/components/Header';
import Sidebar from '~/components/Layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
