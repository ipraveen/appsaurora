import React, { useEffect, useState } from 'react';
import Container from '../container/Container';

export default function Footer() {
    return (
        <footer className="">
            <Container className="p-2 flex flex-col justify-center items-center text-sm text-slate-500 dark:text-slate-400">
                <span>appsaurora © All rights are reserved | {new Date().getFullYear()}</span>
                <span>
                    appsaurora.com is a cloud apps development company. We build cloud apps for your business and daily
                    use.
                </span>
            </Container>
        </footer>
    );
}
