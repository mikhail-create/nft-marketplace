import React from 'react';
import { CategoriesCardPropsType } from 'types/CategoriesCardPropsType';
import SectionLabel from 'components/SectionLabel/SectionLabel';
import CategoriesCard from 'components/CategoriesCard/CategoriesCard';
import Images from 'shared/Images';
import Icons from 'shared/Icons';

import styles from './CategoriesSection.module.scss';

function CategoriesSection() {
  const categoriesData: CategoriesCardPropsType[] = [
    { name: 'Art', image: Images.Categories0, path: '/art', icon: <Icons.PaintBrush stroke='white' /> },
    { name: 'Collectibles', image: Images.Categories1, path: '/collectibles', icon: <Icons.Swatches stroke='white' /> },
    { name: 'Music', image: Images.Categories2, path: '/music', icon: <Icons.MusicNotes stroke='white' /> },
    { name: 'Photography', image: Images.Categories3, path: '/photography', icon: <Icons.Camera stroke='white' /> },
    { name: 'Video', image: Images.Categories4, path: '/video', icon: <Icons.VideoCamera stroke='white' /> },
    { name: 'Utility', image: Images.Categories5, path: '/utility', icon: <Icons.MagicWand stroke='white' /> },
    { name: 'Sport', image: Images.Categories6, path: '/sport', icon: <Icons.Ball stroke='white' /> },
    { name: 'Virtual Worlds', image: Images.Categories7, path: '/virtual-worlds', icon: <Icons.Planet stroke='white' /> }
  ];

  return (
    <div className={styles.categories}>
      <SectionLabel title='Browse Categories' />
      <nav className={styles.categories_list}>
        {categoriesData.map((category, index) => (
          <CategoriesCard
            key={index}
            icon={category.icon}
            name={category.name}
            image={category.image}
            path={category.path}
          />
        ))}
      </nav>
    </div>
  );
}

export default CategoriesSection;
