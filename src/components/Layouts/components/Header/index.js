// eslint-disable-next-line no-unused-vars
import classNames from 'classnames/bind';

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
                {/* {Search} */}
                {/* {Menu} */}
            </div>
        </header>
    );
}

export default Header;
