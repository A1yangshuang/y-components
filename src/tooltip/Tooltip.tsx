import './Tooltip.less';
import cn from 'classnames';
interface TooltiopProps {
  children: string;
  /**
   *
   * @description   气泡框位置，可选 top left right bottom
   * @default         string
   */
  placement: string;
}

function Tooltip(props: TooltiopProps) {
  const { children, placement } = props;
  return (
    <div style={{ margin: '50px' }}>
      <div
        className={`tooltip relative inline-block m-5 border border-solid border-gray-400 px-1.5 py-1  `}
      >
        {children}

        <div
          className={cn([
            'before absolute border-solidm z-50 opacity-0 ',
            {
              'leftbefore left-0 top-1/2  transform -translate-y-1/2 -rotate-90 -ml-2.5':
                placement === 'left',
              'rightbefore transform top-1/2 left-full -ml-1.5 -translate-y-1/2 rotate-90 ':
                placement === 'right',
              'topbefore transform -top-1.5 left-1/2 -translate-x-1/2': placement === 'top',
              'bottombefore top-full left-1/2 -mt-0 transform -translate-x-1/2 rotate-180':
                placement === 'bottom',
            },
          ])}
          style={{
            borderColor: 'transparent',
            borderTopColor: 'black',
            borderWidth: '6px 8px 0 8px',
          }}
        ></div>
        <div
          className={cn([
            'after absolute text-center text-white rounded  px-0.5 py-1 pointer-events-none z-50 opacity-0 ',
            {
              'leftafter transform top-1/2 left-0 -ml-1 -translate-y-1/2 -translate-x-full':
                placement === 'left',
              'rightafter transform left-full top-1/2 ml-1 -translate-y-1/2': placement === 'right',
              'topafter transform left-1/2 -top-1.5  -translate-y-full -translate-x-1/2':
                placement === 'top',
              'bottomafter transform top-full left-1/2 mt-1 -translate-x-1/2':
                placement === 'bottom',
            },
          ])}
          style={{ background: 'black', minWidth: '80px' }}
        >
          look info
        </div>
      </div>
    </div>
  );
}

export default Tooltip;
