import { ComponentPropsWithoutRef, ElementType } from 'react';

export type PolymorphicProps<Element extends ElementType, Props> = Props &
  Omit<ComponentPropsWithoutRef<Element>, 'as'> & {
    as?: Element;
  };
