import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const loading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Profile')} />
        <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('Firstname')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('Lastname')} className={cls.input} />
      </div>
    </div>
  );
};
