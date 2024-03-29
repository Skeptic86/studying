import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} className={cls.mainLink} to={'/'}>
                    {t('Главная страница')}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
