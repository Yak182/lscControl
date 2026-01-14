import { Search, ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Dealers", href: "#dealers" },
    { label: "Help Centre", href: "#help" },
    { label: "Product Registration", href: "#registration" },
    { label: "Newsroom", href: "#newsroom" },
    { label: "Contact Us", href: "#contact" },
    { label: "About Us", href: "#about" },
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-lsc-dark border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex ">
                    <a href="/" className=" max-w-none align-middle ">
                        <img src="src/assets/images/logo.png" alt="" className="h-24"/>
                    </a>


                    <nav className="hidden lg:flex items-center ">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm text-[#ffffff] border-l border-[#e00034] px-2.5 m-1"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                        </div>

                    <div className="flex items-center gap-4">
                        <button className="text-muted-foreground bg-white rounded-full p-2">
                            <Search className=" " />
                        </button>
                        <button className="flex items-center gap-1 text-muted-foreground transition-colors bg-white rounded-full p-1.5">
                            <span className="text-sm text-slate-900 hidden sm:inline">CART</span>
                            <span className="text-white bg-[#e00034] rounded-full aspect-square block w-6 ">0</span>
                        </button>
                        <button
                            className="lg:hidden text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>


                {mobileMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-border">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="block py-2 text-sm text-muted-foreground "
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
