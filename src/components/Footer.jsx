const Footer = () => {
    return (
        <footer className="bg-foreground text-background">
            <div className="section-container section-padding">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">LSC Control Systems</h3>
                        <p className="text-faded">
                            Professional lighting control equipment for the entertainment industry.
                        </p>
                    </div>

                    <div>
                        <h4 className="footer-heading">Products</h4>
                        <ul className="footer-list">
                            <li><a href="#">UNITY Power Systems</a></li>
                            <li><a href="#">Lighting Consoles</a></li>
                            <li><a href="#">Networking</a></li>
                            <li><a href="#">Dimmers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">Support</h4>
                        <ul className="footer-list">
                            <li><a href="#">Help Centre</a></li>
                            <li><a href="#">Downloads</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="footer-heading">Company</h4>
                        <ul className="footer-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm opacity-50">
                    © 2025 LSC Control Systems. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
