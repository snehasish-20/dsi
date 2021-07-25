import React from 'react'
import logo from'../images/logo.svg'
import '../styles/footer.css'
import part1 from'../images/part1.svg'
import part2 from'../images/part2.svg'
import part3 from'../images/part3.svg'
import part4 from'../images/part4.svg'
import part5 from'../images/part5.svg'
import part6 from'../images/part6.svg'

function Footer() {
    const partners=[
        part1,part2,part3,part4,part5,part6
    ]
    return (
    <div className="footer" id="footer">
        <div className="footer-container">
            <div className="address colmn">
                <img src={logo} alt="logo" />
                <p><span>Lorem ipsum dolor sit</span>amet consectetur adipisicing elit. Voluptate id nulla maxime distinctio necessitatibus. Corporis </p>
            </div>
            <div className="contact colmn">
                <h3>Contact</h3>
                <span>Phone: 1800 8899 9909</span>
                <span>Fax: +62 1800 8899</span>
                <span>E-mail: contact@dsi.com</span>
            </div>
            <div className="partners colmn">
                {
                    partners.map(partner=>(
                        <img src={partner} alt="partner" />
                    ))
                }
            </div>
        </div>
        <div className="copyright">
            <span>Copyright &copy; 2021-Dwidasa Samsara Indonesia</span>
        </div>
    </div>
    )
}

export default Footer
