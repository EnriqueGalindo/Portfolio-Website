import React from "react";
import { Card, CardSubtitle, Modal, ModalBody, ModalHeader } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class BasicModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        const { open } = this.state;
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Card onClick={this.toggle} style={{ width: "93.5%", backgroundColor: "#A6DBD7", padding: "15px" }}>
                <CardSubtitle style={{margin: "auto"}}><strong>This is going to be a sneak peak at the article</strong>
                 <br></br>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                 incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis
                 convallis tellus id. Porttitor massa id neque aliquam vestibulum morbi blandit
                 cursus risus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque
                 sit. Morbi enim nunc faucibus a pellentesque sit amet. Massa massa ultricies mi quis
                 drerit dolor. Scelerisque eu ultrices vitae auctor. Orci ac auctor augue mauris augue
                 neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit
                 euismod in pellentesque massa placerat duis ultricies lacus sed. Vitae suscipit tellus
                 mauris a. Cursus metus aliquam eleifend mi in nulla. Maecenas ultricies mi eget mauris
                 pharetra. Turpis egestas pretium aenean pharetra magna ac placerat. Sed libero enim sed
                 faucibus turpis in eu mi bibendum.
                 </CardSubtitle>
                 </Card>
                <Modal open={open} toggle={this.toggle}>
                    <ModalHeader>Current Topic Title</ModalHeader>
                    <ModalBody style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto"}}>Current Topic Body
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus urna duis convallis convallis tellus id. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Morbi enim nunc faucibus a pellentesque sit amet. Massa massa ultricies mi quis hendrerit dolor. Scelerisque eu ultrices vitae auctor. Orci ac auctor augue mauris augue neque gravida. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Vitae suscipit tellus mauris a. Cursus metus aliquam eleifend mi in nulla. Maecenas ultricies mi eget mauris pharetra. Turpis egestas pretium aenean pharetra magna ac placerat. Sed libero enim sed faucibus turpis in eu mi bibendum.

Eget est lorem ipsum dolor sit amet consectetur. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Leo vel orci porta non pulvinar neque laoreet. Id volutpat lacus laoreet non curabitur gravida arcu ac. Mi quis hendrerit dolor magna eget. Nisl pretium fusce id velit ut. Pulvinar neque laoreet suspendisse interdum consectetur libero. Commodo nulla facilisi nullam vehicula. Et molestie ac feugiat sed lectus vestibulum mattis. Ac turpis egestas sed tempus urna et pharetra. Sit amet justo donec enim diam vulputate ut. Et malesuada fames ac turpis egestas sed tempus urna et. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus. Justo donec enim diam vulputate ut pharetra sit. Sit amet nulla facilisi morbi tempus iaculis urna. Interdum velit laoreet id donec ultrices. Eget gravida cum sociis natoque penatibus. Quam vulputate dignissim suspendisse in est ante. In ornare quam viverra orci sagittis eu.

Aliquam purus sit amet luctus. Faucibus turpis in eu mi bibendum neque. Semper risus in hendrerit gravida rutrum. Vestibulum sed arcu non odio euismod lacinia at quis. At consectetur lorem donec massa sapien faucibus et molestie ac. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Pretium nibh ipsum consequat nisl vel pretium. Risus at ultrices mi tempus imperdiet nulla malesuada. Velit euismod in pellentesque massa. Elementum nibh tellus molestie nunc non blandit massa. Non quam lacus suspendisse faucibus. Faucibus ornare suspendisse sed nisi lacus. Tristique magna sit amet purus. At tellus at urna condimentum mattis pellentesque. Morbi tincidunt augue interdum velit euismod in.

Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Donec massa sapien faucibus et molestie ac feugiat sed lectus. Mi bibendum neque egestas congue quisque egestas diam. Augue interdum velit euismod in. Erat nam at lectus urna duis convallis convallis tellus. Elit sed vulputate mi sit amet mauris commodo quis. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Vel orci porta non pulvinar neque laoreet suspendisse. Nibh venenatis cras sed felis eget velit aliquet sagittis. Tempus iaculis urna id volutpat lacus laoreet non curabitur. Convallis aenean et tortor at risus viverra.

Venenatis lectus magna fringilla urna porttitor. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. At quis risus sed vulputate odio ut enim blandit volutpat. Pellentesque habitant morbi tristique senectus et netus. Sodales neque sodales ut etiam sit. Felis eget nunc lobortis mattis. Mi quis hendrerit dolor magna eget est. Risus ultricies tristique nulla aliquet. Libero volutpat sed cras ornare arcu. Consectetur lorem donec massa sapien.
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}