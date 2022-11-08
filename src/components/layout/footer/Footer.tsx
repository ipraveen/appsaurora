import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { ThemeText } from 'components/core';
import { AppsSearch } from 'components/panels';
import * as styles from './header.module.css';
import logo from 'assets/images/logo.svg';
import Container from '../container/Container';

export default function Footer() {
    return (
        <footer className="border-b-2 border-stone-300">
            <Container className="p-6">Footer</Container>
        </footer>
    );
}
