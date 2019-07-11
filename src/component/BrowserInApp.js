import React, { Component } from 'react';
import {
    Image, View, Text, StatusBar, TouchableOpacity,
    WebView, TextInput
} from 'react-native';

import {
    nstyles, nColors
} from '../styles/styles';
import { Images } from '../images';
import Utils from '../app/Utils';

//Deep link Test
htmlTest = `
<html>
    <body>
        <a style="font-size: 50px">Open Appp</a>
    </body>
</html>`;

export default class BrowserInApp extends Component {
    constructor(props) {
        super(props);
        link = Utils.ngetParam(this, 'link');
        istitle = Utils.ngetParam(this, 'istitle', false);
        isEditUrl = Utils.ngetParam(this, 'isEditUrl', true);
        title = Utils.ngetParam(this, 'title', '');
        isHtml = Utils.ngetParam(this, 'isHtml', false);
        if (isHtml) {
            isEditUrl = false;
            istitle = true;
        }
        this.state = {
            //data globle
            isLoading: false,
            editlink: link
        };
        StatusBar.setHidden(false);
    }

    onBack = () => {
        Utils.goback(this);
        //callback gọi lại để set status bar bên welcome
        let oncallBack = Utils.ngetParam(this,'callback', null);
        if (oncallBack != null)
            oncallBack();
    }

    render() {
        return (
            <View style={nstyles.ncontainer}>
                {/* <View style={[nstyles.nhead, { backgroundColor: nColors.main2 }]}>
                    <View style={nstyles.nHcontent}>
                        <View style={nstyles.nHleft}>
                            <TouchableOpacity onPress={this.onBack} style={{justifyContent:'space-between'}}>
                                <Image source={Images.icBackWhite} style={[nstyles.nIcon20, { left: -10 }]} resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                        <View style={nstyles.nHmid}>
                            {
                                istitle ?
                                    <Text style={[nstyles.ntitle, { color: nColors.main }]}>{title}</Text> :
                                    <View style={{ backgroundColor: 'white', borderRadius: 25, paddingVertical: 3 }}>
                                        <TextInput editable={isEditUrl}
                                            placeholder={this.state.editlink}
                                            value={this.state.editlink}
                                            style={nstyles.ntextinput}
                                        />
                                    </View>
                            }
                        </View>
                        <View style={nstyles.nHright} />
                    </View>
                </View> */}
                <View style={nstyles.nbody}>
                    {
                        isHtml ?
                            <WebView
                                originWhitelist={['*']}
                                source={{ html: link }}
                            /> :
                            <WebView source={{ uri: link }}
                                startInLoadingState={true}
                            />
                    }
                </View>
            </View>
        );
    }
}

