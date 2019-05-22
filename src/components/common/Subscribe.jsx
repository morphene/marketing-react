import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });
    return (
        <div className="subscribe-form">
            <input
                ref={node => (email = node)}
                type="email"
                placeholder="Your Email Address"
                className="form-control"
                required
            />
            <button className="btn btn-primary" onClick={submit}>
                Submit
            </button><br /><br />
            {status === "sending" && (
                <div className="subs-sending-msg">sending...</div>
            )}
            {status === "error" && (
                <div
                    className="subs-error-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="subs-success-msg"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </div>
    );
};

class Subscribe extends Component {
    state = {};
    render() {
        const url =
            "https://boonedevelopment.us20.list-manage.com/subscribe/post?u=4ac124b99b840538001b2b70f&amp;id=a4a9bd9f38";
        return (
            <React.Fragment>
                <section className="subscribe-area ptb-100">
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="newsletter">
                                    <h4>
                                        Subscribe for the latest<br/>
                                        <span>Morphene Blockchain</span> updates
                                    </h4>
                                    <MailchimpSubscribe
                                        url={url}
                                        render={({
                                            subscribe,
                                            status,
                                            message
                                        }) => (
                                            <CustomForm
                                                status={status}
                                                message={message}
                                                onValidated={formData =>
                                                    subscribe(formData)
                                                }
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pattern" />
                    <div className="pattern-2" />
                </section>
            </React.Fragment>
        );
    }
}

export default Subscribe;
