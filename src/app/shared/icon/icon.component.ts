import { Component, Input } from '@angular/core';

const ICON_ALIASES: Record<string, string> = {
  shield: 'shield',
  clock: 'schedule',
  users: 'groups',
  route: 'route',
  map: 'location_on',
  nlp: 'forum',
  menu: 'menu',
  external: 'open_in_new',
  arrow_forward: 'arrow_forward',
  check: 'check',
  warning: 'warning',
  account_balance: 'account_balance',
};

// 1. Definimos un tipo para los tamaños válidos
type IconSize = 'xs' | 'sm' | 'md' | 'lg';

// 2. Usamos ese tipo específico en el Record en lugar de 'string'
const SIZE_CLASSES: Record<IconSize, string> = {
  xs: 'text-base leading-none',
  sm: 'text-xl leading-none',
  md: 'text-2xl leading-none',
  lg: 'text-3xl leading-none',
};

@Component({
  selector: 'app-icon',
  standalone: false,
  template: `
    <span
      class="material-symbols-outlined inline-block select-none"
      [class]="sizeClass"
      [attr.aria-hidden]="label ? null : true"
      [attr.aria-label]="label"
      [attr.role]="label ? 'img' : null">
      {{ symbol }}
    </span>
  `,
})
export class IconComponent {
  @Input({ required: true }) name!: string;
  @Input() size: IconSize = 'sm';
  @Input() label?: string;

  protected get symbol(): string {
    return ICON_ALIASES[this.name] ?? this.name;
  }

  protected get sizeClass(): string {
    return SIZE_CLASSES[this.size] ?? SIZE_CLASSES.sm;
  }
}