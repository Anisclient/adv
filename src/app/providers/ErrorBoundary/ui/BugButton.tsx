import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

// testing component
export const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={() => setError(true)}>{t('ThrowError')}</Button>;
};
