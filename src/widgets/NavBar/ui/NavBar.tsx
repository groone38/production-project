import React, { useCallback, useState, useTransition } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./NavBar.module.scss";
import Modal from "shared/ui/Modal/Modal";
import Button, { Theme, ThemeButton } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button
          className={cls.mainLink}
          theme={ThemeButton.CLEAR}
          themeApp={Theme.SECONDARY}
          onClick={onToggleModal}
        >
          {t("Sing in")}
        </Button>
        <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>

      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        perspiciatis dolore adipisci iure nostrum, consectetur aspernatur
        mollitia deserunt nulla magni distinctio necessitatibus corrupti tempore
        vitae ea expedita fugit? Dolorum, natus. Voluptate cum tempore
        perferendis voluptatem veniam, vel obcaecati. Animi temporibus minus
        deleniti saepe cupiditate corrupti enim dicta! Vitae sint ullam alias,
        cum fugit odit veritatis harum. Ratione voluptatum commodi doloremque?
        Nemo quis harum laborum placeat eos culpa cum voluptatem aspernatur aut
        perferendis molestias ab quos tempore, sapiente quaerat itaque a maiores
        deserunt, enim dicta quia. Itaque explicabo eligendi incidunt
        cupiditate! Quae explicabo nisi veritatis provident voluptates vero
        perspiciatis id nulla doloribus animi consequuntur, harum mollitia iste
        unde magni aspernatur consectetur consequatur nam nostrum ducimus sed
        cupiditate ad architecto esse. Harum! Nobis doloremque illo quisquam,
        obcaecati explicabo omnis eum perferendis aperiam commodi, vitae quas
        itaque porro, consequatur iste? Corrupti necessitatibus voluptate ex
        totam praesentium, id maiores iusto hic rerum quisquam quasi! Voluptatum
        eligendi nulla doloremque expedita eum nisi aperiam nam quisquam
        corporis? Et impedit deserunt quo voluptatibus dignissimos aliquam ex
        exercitationem magni cum molestiae laudantium saepe fuga ratione,
        assumenda, vitae expedita? Corporis, mollitia? Sapiente id, cum facere
        perferendis explicabo ut eum reprehenderit aut blanditiis! Quisquam
        reprehenderit cumque dignissimos corrupti expedita voluptatum minus
        obcaecati unde eum, ut deleniti minima eligendi dolorem perferendis.
        Porro, omnis saepe fugit nam libero perspiciatis quaerat neque? Sit
        itaque aliquam quos eum ea, voluptate dolor totam error tempore
        perferendis. Quia quam impedit odit beatae illum eos dicta deleniti.
        Veniam, voluptatum. Officiis voluptate veniam, aperiam velit mollitia
        totam magni tempora. Quos, explicabo? Vel cumque odit, iusto delectus,
        sunt quas commodi porro aliquam facilis veritatis nam ipsa, vero fuga
        molestiae. Vitae libero possimus officiis inventore excepturi. Eos quasi
        in est totam perspiciatis non ullam fugiat repellendus, dolorem aperiam
        placeat provident nesciunt exercitationem recusandae excepturi vitae et.
        Accusamus blanditiis animi vero.
      </Modal>
    </div>
  );
};

export default NavBar;
