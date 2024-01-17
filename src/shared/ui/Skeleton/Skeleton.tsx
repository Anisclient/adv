import { CSSProperties, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  border?: string;
}

const Skeleton = memo((props: SkeletonProps) => {
  const {
    className, width, height, border,
  } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(cls.skeleton, {}, [className])} style={styles} />;
});

export default Skeleton;
