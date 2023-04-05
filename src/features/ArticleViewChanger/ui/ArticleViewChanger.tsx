import { classNames } from 'shared/lib/classNames/classNames';

import { ArticleView } from 'entities/Article';
import { Button, ButtonTheme } from 'shared/ui/Button';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewChanger.module.scss';

interface IArticleViewChangerProps {
 className?: string;
 onSwitchView?: (view: ArticleView) => void;
 view: ArticleView;
}

const itemsView = [
    { view: ArticleView.LIST, item: ListIcon },
    { view: ArticleView.TILE, item: TileIcon },
];

export const ArticleViewChanger = ({ className, onSwitchView, view }: IArticleViewChangerProps) => {
    const handleSwitchView = (view: ArticleView) => () => {
        onSwitchView?.(view);
    };

    return (
        <div className={classNames(cls.ArticleViewChanger, {}, [className])}>
            {itemsView.map((item) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={handleSwitchView(item.view)}
                    key={item.view}
                >
                    <Icon
                        className={classNames('', { [cls.selectedView]: view !== item.view }, [])}
                        Svg={item.item}
                    />
                </Button>
            ))}

        </div>
    );
};
