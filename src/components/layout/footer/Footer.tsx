import React from 'react';
import Container from '../container/Container';

export default function Footer() {
    return (
        <footer className="grid place-content-center">
            <Container className="p-2">
                <span className="text-gray-600">appsaurora © All rights are reserved | {new Date().getFullYear()}</span>
            </Container>
        </footer>
    );
}
