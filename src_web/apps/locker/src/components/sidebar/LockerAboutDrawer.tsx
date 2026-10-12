import {
    File01Icon,
    GithubIcon,
    Shield01Icon,
} from "@hugeicons/core-free-icons";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { t } from "i18next";
import React from "react";
import { LockerSidebarCardButton } from "./LockerSidebarCardButton";
import {
    LockerTitledNestedSidebarDrawer,
    type LockerNestedSidebarDrawerVisibilityProps,
} from "./LockerSidebarShell";

const openExternal = (url: string) => window.open(url, "_blank", "noopener");

export const LockerAboutDrawer: React.FC<
    LockerNestedSidebarDrawerVisibilityProps
> = ({ open, onClose, onRootClose }) => {
    const handleRootClose = () => {
        onClose();
        onRootClose();
    };

    return (
        <LockerTitledNestedSidebarDrawer
            {...{ open, onClose }}
            onRootClose={handleRootClose}
            title={t("about")}
        >
            <LockerSidebarCardButton
                icon={GithubIcon}
                label="Contributors: Akshit rai kakkar and dipanshu batra"
            />
        </LockerTitledNestedSidebarDrawer>
    );
};
