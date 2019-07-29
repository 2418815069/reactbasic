import React,{Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Home from "../view/home/index";
import Category from "../view/category/index";
import Product from "../view/product/index";
import UserManage from "../view/usermanange/index";
import RoleManage from "../view/rolemanage/index";
import OrderManage from "../view/ordermanage/index";
import ChartsBar from "../view/chartsbar/index";
import ChartsLine from "../view/chartsline/index";
import ChartsPie from "../view/chartspie/index";
export default class RouterIndex extends Component {
    render(){
        return (
            <Switch>
                <Redirect from='/' exact to='/home'/>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/user' component={UserManage}/>
              <Route path='/role' component={RoleManage}/>
              <Route path="/charts/bar" component={ChartsBar}/>
              <Route path="/charts/pie" component={ChartsPie}/>
              <Route path="/charts/line" component={ChartsLine}/>
              <Route path="/order" component={OrderManage}/>
              {/* <Route component={NotFound}/> */}
            </Switch>
        );
    }
}