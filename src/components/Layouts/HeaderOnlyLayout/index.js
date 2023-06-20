import Header from '~/components/Layouts/components/Header';

function HeaderOnlyLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default HeaderOnlyLayout;
