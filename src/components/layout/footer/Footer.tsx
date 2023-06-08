import React, { useEffect, useState } from 'react';
import Container from '../container/Container';

export default function Footer() {

   
    return (
        <footer className="grid place-content-center">
            <Container className="p-2">
                <span className="text-theme-900 dark:text-slate-400">appsaurora © All rights are reserved | {new Date().getFullYear()}</span> 
            </Container>
        </footer>
    );
}
