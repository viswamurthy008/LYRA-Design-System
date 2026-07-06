// ============================================================================
//  @acme/design-system — public API
//  React + TypeScript components styled with CSS variables (src/styles/tokens.css).
//  Mirrors the Figma "Design System — MVP" library. 87 components.
// ============================================================================
import './styles/tokens.css';
import './styles/foundation-tokens.css';
import './styles/chart-tokens.css';

// ── Actions ─────────────────────────────────────────────────────────────────
export { Button } from './components/Button/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button/Button';
export { IconButton } from './components/IconButton/IconButton';
export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonSize,
} from './components/IconButton/IconButton';
export { ButtonGroup } from './components/ButtonGroup/ButtonGroup';
export type { ButtonGroupProps } from './components/ButtonGroup/ButtonGroup';
export { Link } from './components/Link/Link';
export type { LinkProps } from './components/Link/Link';

// ── Forms ─────────────────────────────────────────────────────────────────--
export { Input } from './components/Input/Input';
export type { InputProps, InputState } from './components/Input/Input';
export { Textarea } from './components/Textarea/Textarea';
export type { TextareaProps, TextareaState } from './components/Textarea/Textarea';
export { SearchField } from './components/SearchField/SearchField';
export type { SearchFieldProps } from './components/SearchField/SearchField';
export { Select } from './components/Select/Select';
export type { SelectProps, SelectOption, SelectState } from './components/Select/Select';
export { Combobox } from './components/Combobox/Combobox';
export type { ComboboxProps, ComboboxOption } from './components/Combobox/Combobox';
export { Checkbox } from './components/Checkbox/Checkbox';
export type { CheckboxProps } from './components/Checkbox/Checkbox';
export { Radio } from './components/Radio/Radio';
export type { RadioProps } from './components/Radio/Radio';
export { Toggle } from './components/Toggle/Toggle';
export type { ToggleProps } from './components/Toggle/Toggle';
export { SwitchGroup } from './components/SwitchGroup/SwitchGroup';
export type { SwitchGroupProps, SwitchItem } from './components/SwitchGroup/SwitchGroup';
export { NumberStepper } from './components/NumberStepper/NumberStepper';
export type { NumberStepperProps } from './components/NumberStepper/NumberStepper';
export { SegmentedControl } from './components/SegmentedControl/SegmentedControl';
export type {
  SegmentedControlProps,
  SegmentOption,
} from './components/SegmentedControl/SegmentedControl';
export { Slider } from './components/Slider/Slider';
export type { SliderProps } from './components/Slider/Slider';
export { MultiSelect } from './components/MultiSelect/MultiSelect';
export type { MultiSelectProps, MultiSelectOption } from './components/MultiSelect/MultiSelect';
export { FileUpload } from './components/FileUpload/FileUpload';
export type { FileUploadProps } from './components/FileUpload/FileUpload';
export { OtpInput } from './components/OtpInput/OtpInput';
export type { OtpInputProps } from './components/OtpInput/OtpInput';
export { RangeSlider } from './components/RangeSlider/RangeSlider';
export type { RangeSliderProps } from './components/RangeSlider/RangeSlider';
export { FormField } from './components/FormField/FormField';
export type { FormFieldProps } from './components/FormField/FormField';

// ── Pickers ─────────────────────────────────────────────────────────────────
export { DatePicker } from './components/DatePicker/DatePicker';
export type { DatePickerProps } from './components/DatePicker/DatePicker';
export { TimePicker } from './components/TimePicker/TimePicker';
export type { TimePickerProps, TimeValue } from './components/TimePicker/TimePicker';
export { ColorPicker } from './components/ColorPicker/ColorPicker';
export type { ColorPickerProps } from './components/ColorPicker/ColorPicker';
export { DateRangePicker } from './components/DateRangePicker/DateRangePicker';
export type { DateRangePickerProps, DateRange } from './components/DateRangePicker/DateRangePicker';

// ── Data display ──────────────────────────────────────────────────────────--
export { Card } from './components/Card/Card';
export type { CardProps, CardVariant } from './components/Card/Card';
export { StatCard } from './components/StatCard/StatCard';
export type { StatCardProps } from './components/StatCard/StatCard';
export { FeatureCard } from './components/FeatureCard/FeatureCard';
export type { FeatureCardProps } from './components/FeatureCard/FeatureCard';
export { ProfileCard } from './components/ProfileCard/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard/ProfileCard';
export { MediaCard } from './components/MediaCard/MediaCard';
export type { MediaCardProps } from './components/MediaCard/MediaCard';
export { Avatar } from './components/Avatar/Avatar';
export type { AvatarProps, AvatarSize } from './components/Avatar/Avatar';
export { AvatarGroup } from './components/AvatarGroup/AvatarGroup';
export type { AvatarGroupProps, AvatarGroupItem } from './components/AvatarGroup/AvatarGroup';
export { Badge } from './components/Badge/Badge';
export type { BadgeProps, BadgeVariant } from './components/Badge/Badge';
export { Chip } from './components/Chip/Chip';
export type { ChipProps } from './components/Chip/Chip';
export { Rating } from './components/Rating/Rating';
export type { RatingProps } from './components/Rating/Rating';
export { List } from './components/List/List';
export type { ListProps, ListItemData } from './components/List/List';
export { Carousel } from './components/Carousel/Carousel';
export type { CarouselProps } from './components/Carousel/Carousel';
export { Divider } from './components/Divider/Divider';
export type { DividerProps } from './components/Divider/Divider';
export { DataTable } from './components/DataTable/DataTable';
export type { DataTableProps, Column } from './components/DataTable/DataTable';
export { Calendar } from './components/Calendar/Calendar';
export type { CalendarProps, CalendarEvent } from './components/Calendar/Calendar';
export { Metric } from './components/Metric/Metric';
export type { MetricProps } from './components/Metric/Metric';
export { DescriptionList } from './components/DescriptionList/DescriptionList';
export type {
  DescriptionListProps,
  DescriptionListItem,
} from './components/DescriptionList/DescriptionList';

// ── Charts ────────────────────────────────────────────────────────────────--
export { Sparkline } from './components/Sparkline/Sparkline';
export type { SparklineProps } from './components/Sparkline/Sparkline';
export { MiniBarChart } from './components/MiniBarChart/MiniBarChart';
export type { MiniBarChartProps } from './components/MiniBarChart/MiniBarChart';
export { LineChart } from './components/LineChart/LineChart';
export type { LineChartProps, LineSeries } from './components/LineChart/LineChart';
export { AreaChart } from './components/AreaChart/AreaChart';
export type { AreaChartProps, AreaSeries } from './components/AreaChart/AreaChart';
export { BarChart } from './components/BarChart/BarChart';
export type { BarChartProps, BarSeries } from './components/BarChart/BarChart';
export { DonutChart } from './components/DonutChart/DonutChart';
export type { DonutChartProps, DonutSlice } from './components/DonutChart/DonutChart';
export { ScatterPlot } from './components/ScatterPlot/ScatterPlot';
export type { ScatterPlotProps, ScatterSeries } from './components/ScatterPlot/ScatterPlot';
export { BubbleChart } from './components/BubbleChart/BubbleChart';
export type { BubbleChartProps, BubbleSeries } from './components/BubbleChart/BubbleChart';
export { WaterfallChart } from './components/WaterfallChart/WaterfallChart';
export type {
  WaterfallChartProps,
  WaterfallStep,
} from './components/WaterfallChart/WaterfallChart';
export { Treemap } from './components/Treemap/Treemap';
export type { TreemapProps, TreemapItem } from './components/Treemap/Treemap';
export { SankeyChart } from './components/SankeyChart/SankeyChart';
export type {
  SankeyChartProps,
  SankeyNode,
  SankeyLink,
} from './components/SankeyChart/SankeyChart';

// ── Feedback ──────────────────────────────────────────────────────────────--
export { Alert } from './components/Alert/Alert';
export type { AlertProps, AlertType } from './components/Alert/Alert';
export { Banner } from './components/Banner/Banner';
export type { BannerProps, BannerType } from './components/Banner/Banner';
export { Toast } from './components/Toast/Toast';
export type { ToastProps, ToastType } from './components/Toast/Toast';
export { CircularProgress } from './components/CircularProgress/CircularProgress';
export type { CircularProgressProps } from './components/CircularProgress/CircularProgress';
export { Snackbar } from './components/Snackbar/Snackbar';
export type { SnackbarProps } from './components/Snackbar/Snackbar';
export { Tooltip } from './components/Tooltip/Tooltip';
export type { TooltipProps } from './components/Tooltip/Tooltip';
export { Popover } from './components/Popover/Popover';
export type { PopoverProps } from './components/Popover/Popover';
export { Progress } from './components/Progress/Progress';
export type { ProgressProps } from './components/Progress/Progress';
export { Spinner } from './components/Spinner/Spinner';
export type { SpinnerProps, SpinnerSize } from './components/Spinner/Spinner';
export { Skeleton } from './components/Skeleton/Skeleton';
export type { SkeletonProps } from './components/Skeleton/Skeleton';
export { EmptyState } from './components/EmptyState/EmptyState';
export type { EmptyStateProps } from './components/EmptyState/EmptyState';
export { NotificationCenter } from './components/NotificationCenter/NotificationCenter';
export type {
  NotificationCenterProps,
  NotificationItem,
} from './components/NotificationCenter/NotificationCenter';

// ── Navigation ────────────────────────────────────────────────────────────--
export { Tabs } from './components/Tabs/Tabs';
export type { TabsProps, TabItem } from './components/Tabs/Tabs';
export { Breadcrumb } from './components/Breadcrumb/Breadcrumb';
export type { BreadcrumbProps, Crumb } from './components/Breadcrumb/Breadcrumb';
export { Pagination } from './components/Pagination/Pagination';
export type { PaginationProps } from './components/Pagination/Pagination';
export { Accordion } from './components/Accordion/Accordion';
export type { AccordionProps, AccordionItem } from './components/Accordion/Accordion';
export { Stepper } from './components/Stepper/Stepper';
export type { StepperProps, Step } from './components/Stepper/Stepper';
export { Timeline } from './components/Timeline/Timeline';
export type { TimelineProps, TimelineItem } from './components/Timeline/Timeline';
export { Navbar } from './components/Navbar/Navbar';
export type { NavbarProps, NavItem } from './components/Navbar/Navbar';
export { Sidebar } from './components/Sidebar/Sidebar';
export type { SidebarProps, SidebarItem } from './components/Sidebar/Sidebar';
export { TreeView } from './components/TreeView/TreeView';
export type { TreeViewProps, TreeNode } from './components/TreeView/TreeView';

// ── Overlays ──────────────────────────────────────────────────────────────--
export { Modal } from './components/Modal/Modal';
export type { ModalProps } from './components/Modal/Modal';
export { Drawer } from './components/Drawer/Drawer';
export type { DrawerProps } from './components/Drawer/Drawer';
export { CommandPalette } from './components/CommandPalette/CommandPalette';
export type { CommandPaletteProps, Command } from './components/CommandPalette/CommandPalette';
export { ContextMenu } from './components/ContextMenu/ContextMenu';
export type { ContextMenuProps, ContextMenuItem } from './components/ContextMenu/ContextMenu';
export { Tour } from './components/Tour/Tour';
export type { TourProps, TourStep } from './components/Tour/Tour';

// ── Layout ──────────────────────────────────────────────────────────────────
export { AppShell } from './components/AppShell/AppShell';
export type { AppShellProps } from './components/AppShell/AppShell';
export { Stack } from './components/Stack/Stack';
export type { StackProps } from './components/Stack/Stack';
export { Grid } from './components/Grid/Grid';
export type { GridProps } from './components/Grid/Grid';
export { Container } from './components/Container/Container';
export type { ContainerProps } from './components/Container/Container';
export { Splitter } from './components/Splitter/Splitter';
export type { SplitterProps } from './components/Splitter/Splitter';

// ── Utility ─────────────────────────────────────────────────────────────────
export { Icon, ICON_NAMES } from './components/Icon/Icon';
export type { IconProps, IconName } from './components/Icon/Icon';
export { Kbd } from './components/Kbd/Kbd';
export type { KbdProps } from './components/Kbd/Kbd';
export { Code } from './components/Code/Code';
export type { CodeProps } from './components/Code/Code';
