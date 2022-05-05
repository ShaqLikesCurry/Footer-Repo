import React from 'react';
import Footer from '../components/footer';

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>Players</Footer.Title>
                    <Footer.Link href="#">Guiders</Footer.Link>
                    <Footer.Link href="#">Customers</Footer.Link>
                    <Footer.Link href="#">Tourism Company</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Package Types</Footer.Title>
                    <Footer.Link href="#">Environment</Footer.Link>
                    <Footer.Link href="#">Culture</Footer.Link>
                    <Footer.Link href="#">Experience</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Links</Footer.Title>
                    <Footer.Link href="#">Find a Package</Footer.Link>
                    <Footer.Link href="#">Find a Guide</Footer.Link>
                    <Footer.Link href="#">Log In</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Vision</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}