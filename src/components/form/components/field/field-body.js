import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


export default class FieldBody extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
    renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }

  static defaultProps = {
    children: null,
    className: '',
    style: {},
    renderAs: 'div',
  }
  render() {
    const {
      children,
      className,
      style,
      renderAs,
    } = this.props;
    const Element = renderAs;

    return (
      <Element
        style={style}
        className={classnames('field-body', className, {
        })}
      >
        {children}
      </Element>
    );
  }
}
