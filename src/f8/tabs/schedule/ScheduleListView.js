/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */
'use strict';

var React = require('React');
var ListView = require('ListView');
var View = require('View');
var Text =require('Text');


class ScheduleListView extends React.Component {
  props: Props;
  state: State;
  _innerRef: ?PureListView;

  constructor(props: Props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1,row2) => row1 !== row2,
      }),
    };

    this._innerRef = null;

    (this: any).renderRow = this.renderRow.bind(this);
    this.storeInnerRef = this.storeInnerRef.bind(this);
  }

  render() {
    var data = this.props.data;
    return (
      <ListView
          ref={this.storeInnerRef}
          style={{flex:1,}}
          dataSource= {this.state.dataSource.cloneWithRows(data)}
          renderRow={this.renderRow}
          {...(this.props: any /* flow can't guarantee the shape of props */)}
          onTouchMove={(e)=>{console.log("111111",e.nativeEvent)}}
      />
    );
  }


  renderRow(RowData) {
    return (
      <View style={{height:50}}>
        <Text>
          {RowData}
        </Text>
      </View>
    );
  }

  scrollTo(...args: Array<any>) {
    this._innerRef && this._innerRef.scrollTo(...args);
  }

  getScrollResponder(): any {
    return this._innerRef && this._innerRef.getScrollResponder();
  }

  //存下ref  当前页面scroll时 其他listview同时也scroll 确保高度一致
  storeInnerRef(ref: ?PureListView) {
    this._innerRef = ref;
  }
}

module.exports = ScheduleListView;
