import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  courses: icon('ic_plate'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {
            title: t('dashboard'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          {
            title: t('booking'),
            path: '#', // paths.dashboard.general.booking,
            icon: ICONS.booking,
            disabled: true,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('management'),
        items: [
          // PIATTI
          {
            title: t('courses'),
            path: paths.dashboard.product.root,
            icon: ICONS.courses,
            children: [
              { title: t('overview'), path: paths.dashboard.product.root },
              { title: t('add'), path: paths.dashboard.product.new },
              { title: t('edit'), path: paths.dashboard.product.demo.edit },
            ],
          },

          // ORDER
          {
            title: t('orders'),
            path: paths.dashboard.order.root,
            icon: ICONS.order,
          },

          // INVOICE
          {
            title: t('invoices'),
            path: paths.dashboard.invoice.root,
            icon: ICONS.invoice,
            children: [
              { title: t('overview'), path: paths.dashboard.invoice.root },
              { title: t('create'), path: paths.dashboard.invoice.new },
              { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
            ],
          },

          // CHAT
          {
            title: t('chat'),
            path: '#', // paths.dashboard.chat,
            icon: ICONS.chat,
            disabled: true,
          },

          // CALENDAR
          {
            title: t('calendar'),
            path: '#', // paths.dashboard.calendar,
            icon: ICONS.calendar,
            disabled: true,
          },
        ],
      },

      // DEMO MENU STATES

      /*      {
        subheader: t(t('other_cases')),
        items: [
          {
            // default roles : All roles can see this entry.
            // roles: ['user'] Only users can see this item.
            // roles: ['admin'] Only admin can see this item.
            // roles: ['admin', 'manager'] Only admin/manager can see this item.
            // Reference from 'src/guards/RoleBasedGuard'.
            title: t('item_by_roles'),
            path: paths.dashboard.permission,
            icon: ICONS.lock,
            roles: ['admin', 'manager'],
            caption: t('only_admin_can_see_this_item'),
          },
          {
            title: t('menu_level'),
            path: '#/dashboard/menu_level',
            icon: ICONS.menuItem,
            children: [
              {
                title: t('menu_level_1a'),
                path: '#/dashboard/menu_level/menu_level_1a',
              },
              {
                title: t('menu_level_1b'),
                path: '#/dashboard/menu_level/menu_level_1b',
                children: [
                  {
                    title: t('menu_level_2a'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2a',
                  },
                  {
                    title: t('menu_level_2b'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b',
                    children: [
                      {
                        title: t('menu_level_3a'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
                      },
                      {
                        title: t('menu_level_3b'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: t('item_disabled'),
            path: '#disabled',
            icon: ICONS.disabled,
            disabled: true,
          },
          {
            title: t('item_label'),
            path: '#label',
            icon: ICONS.label,
            info: (
              <Label color="info" startIcon={<Iconify icon="solar:bell-bing-bold-duotone" />}>
                NEW
              </Label>
            ),
          },
          {
            title: t('item_caption'),
            path: '#caption',
            icon: ICONS.menuItem,
            caption:
              'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
          },
          {
            title: t('item_external_link'),
            path: 'https://www.google.com/',
            icon: ICONS.external,
          },
          {
            title: t('blank'),
            path: paths.dashboard.blank,
            icon: ICONS.blank,
          },
        ],
      }, */
    ],
    [t]
  );

  return data;
}
