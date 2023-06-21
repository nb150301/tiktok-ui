// eslint-disable-next-line no-unused-vars
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <div className={cx('search-form')}>
                    <input type="text" placeholder="Search" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={['fas', 'circle-xmark']} />
                    </button>
                    <button className={cx('loading')}>{/* <FontAwesomeIcon icon={['fas', 'spinner']} /> */}</button>
                    <button className={cx('search')}>
                        <FontAwesomeIcon icon={['fas', 'magnifying-glass']} />
                    </button>
                </div>
                <div classname={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
