function Footer({ lang }) {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light-50 text-center py-4 border-top border-secondary mt-auto">
            <div className="container-fluid">
                <p className="mb-1 text-white-50 small">
                    &copy; {year} SEG3125 UI Dashboard Assignment — University of Ottawa
                </p>
                <p className="mb-0 text-muted small text-white-50" style={{ fontSize: '0.8rem' }}>
                    {lang === 'en'
                        ? "Designed using React, Bootstrap, and Recharts." : "Conçu avec React, Bootstrap, et Recharts."}
                </p>
            </div>
        </footer>
    );
}

export default Footer;