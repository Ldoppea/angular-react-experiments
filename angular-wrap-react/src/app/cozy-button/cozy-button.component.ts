import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as uuid from 'uuid';
import * as invariant from 'invariant';

// @ts-ignore
import Button from 'cozy-ui/transpiled/react/Button';
import 'cozy-ui/transpiled/react/stylesheet.css';
import 'cozy-ui/dist/cozy-ui.utils.min.css';

interface ButtonProps {
  label: string;
  onClick: any;
  disabled: boolean;
}

@Component({
  selector: 'app-cozy-button',
  templateUrl: './cozy-button.component.html',
  styleUrls: ['./cozy-button.component.scss'],
})
export class CozyButtonComponent
  implements OnInit, OnDestroy, OnChanges, AfterViewInit
{
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Output() cozyClickEvent = new EventEmitter<any>();

  public rootDomID: string = '';

  /******************/
  /* Props Bindings */
  /******************/

  protected onCozyClick() {
    console.log('click from component wrapper');
    this.cozyClickEvent.emit();
  }

  protected getProps(): ButtonProps {
    const { label, onCozyClick, disabled } = this;

    return {
      label,
      onClick: onCozyClick.bind(this),
      disabled,
    };
  }

  /**********/
  /* Render */
  /**********/

  protected getRootDomNode() {
    const node = document.getElementById(this.rootDomID);
    invariant(node, `Node '${this.rootDomID} not found!`);
    return node;
  }

  private isMounted(): boolean {
    return !!this.rootDomID;
  }

  protected renderReact() {
    console.log('CozyButtonComponent renderReact');

    if (this.isMounted()) {
      ReactDOM.render(
        React.createElement(Button, this.getProps()),
        this.getRootDomNode()
      );
    }
  }

  /*************/
  /* Lifecycle */
  /*************/

  ngOnInit() {
    console.log('CozyButtonComponent ngOnInit');
    this.rootDomID = uuid.v1();
  }

  ngOnChanges() {
    console.log('CozyButtonComponent ngOnChanges');
    this.renderReact();
  }

  ngAfterViewInit() {
    console.log('CozyButtonComponent ngAfterViewInit');
    this.renderReact();
  }

  ngOnDestroy() {
    console.log('CozyButtonComponent ngOnDestroy');
    // Uncomment if Angular 4 issue that ngOnDestroy is called AFTER DOM node removal is resolved
    // ReactDOM.unmountComponentAtNode(this.getRootDomNode())
  }
}
