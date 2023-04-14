import Container from '@/app/Core/Container';
import React from 'react';
import styles from './Navbar.module.css'
import Image from 'next/image';
import Logoblack from '../../../../public/images/logo_Black.svg'
import Link from 'next/link';
const Navbar = () => {
    return (
        <Container>
            <div className={styles.navbar}>
                <div className="item-flex">
                    <Link href="/">
                    <div className={styles.nav_logo}>
                        <Image src={Logoblack} width={300} height={150}/>
                    </div>
                    </Link>
                    <div className={styles.nav_item}>
                        <Link href="/product">
                        <div className={styles.item}>
                            <p className={styles.title}>Market</p>
                            <p className={styles.tag}>Products</p>
                        </div>
                        </Link>
                        <Link href="/service">
                        <div className={styles.item}>
                            <p className={styles.title}>COMPETENCE</p>
                            <p className={styles.tag}>Services</p>
                        </div>
                        </Link>
                        <Link href="/about">
                        <div className={styles.item}>
                            <p className={styles.title}>COMPANY</p>
                            <p className={styles.tag}>About</p>
                        </div>
                        </Link>
                        <Link href="/career">
                        <div className={styles.item}>
                            <p className={styles.title}>CONVERGE</p>
                            <p className={styles.tag}>Career</p>
                        </div>
                        </Link>
                        <Link href="/contact">
                            <div className={styles.item}>
                            <p className={styles.title}>CONNECT</p>
                            <p className={styles.tag}>Contact</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Navbar;