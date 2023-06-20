// eslint-disable-next-line no-unused-vars
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import '~/fontawesome.js';
import styles from './Header.module.scss';
import images from '~/assets/image';

const cx = classNames.bind(styles);

function Header() {
    console.log(images);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                        <FontAwesomeIcon icon={['fas', 'circle-xmark']} />
                    </button>
                    <button>{/* Loading */}</button>
                    <button className={cx('search')}>{/* Search */}</button>
                </div>
                <div classname={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
